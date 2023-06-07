import Shader, { type UniformValue } from './Shader';
import { EditorView, basicSetup } from 'codemirror';
import { EditorViewConfig, ViewUpdate, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { clike } from '@codemirror/legacy-modes/mode/clike';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { StreamLanguage } from '@codemirror/language';
import { createStyleSheet } from '../util/dom';
import { formatShadertoySource } from '../util/shadertoy';
import { oneDark } from '@codemirror/theme-one-dark';
import { BLOCKS, KEYWORDS, MATH, TYPES, RAW_UTILS } from '../constants/glsl';
import { DEFAULT_FRAGMENT_SHADER, DEFAULT_UNIFORMS } from '../constants/shader';
import styles from '../css/codemirror.css?inline';

export interface EditorConfig {
  target?: HTMLElement;
  shader?: string;
  uniforms?: UniformValue[];
  debug?: boolean;
  onError?: Function;
  onSuccess?: Function;
  onUpdate?: Function;
  width?: number;
  height?: number;
  dpr?: number;
  fillViewport?: boolean;
}

const buildAtoms = (uniforms: UniformValue[]) => ({
  ...uniforms.reduce((acc: any, uniform: any) => {
    acc[uniform[0]] = true;
    return acc;
  }, {}),
  ...Object.keys(RAW_UTILS).reduce((acc: any, key: string) => {
    acc[key] = true;
    return acc;
  }, {}),
});

const defineLanguageDetails = (uniforms: any) =>
  clike({
    name: 'FragmentShader',
    types: TYPES,
    atoms: buildAtoms(uniforms as any),
    builtin: MATH,
    keywords: KEYWORDS,
    blockKeywords: BLOCKS,
  });

const DEFAULT_CONFIG = {
  target: document.body,
  shader: DEFAULT_FRAGMENT_SHADER,
  uniforms: DEFAULT_UNIFORMS,
  debug: true,
  onError: () => {},
  onSuccess: () => {},
  onUpdate: () => {},
  width: window.innerWidth,
  height: window.innerHeight,
  dpr: window.devicePixelRatio,
  fillViewport: true,
};

const errorStylesheet = createStyleSheet();

let errorStyleTimeout = 0;

function setErrorStyle({
  message,
  line,
}: {
  message: string;
  line: string;
}): void {
  clearTimeout(errorStyleTimeout);

  errorStyleTimeout = setTimeout(() => {
    errorStylesheet.textContent = /*css*/ `
      .cm-line:nth-child(${line}) {
        position: relative;
        outline: 1px solid var(--red);
      }
      .cm-gutterElement:nth-child(${line + 1}) {
        background: var(--red);
        transition: all var(--hover-duration) var(--easing);
        outline: 1px solid var(--red);
      }

      .cm-line:nth-child(${line}):after {
        transition: all var(--hover-duration) var(--easing);
        content: "${message}";
        position: absolute;
        top: 0;
        left: 100%;
        background: var(--red);
        color: var(--white);
        z-index: 100;
        padding: 0 .5rem;
        outline: 1px solid var(--red);
      }
    `;
  }, 500);
}

function hideError() {
  clearTimeout(errorStyleTimeout);

  errorStylesheet.textContent = '';
}

export default class Editor {
  private editorView: EditorView | undefined;
  private shader: Shader;
  private uniforms: UniformValue[];
  private config: EditorConfig;
  private _onUpdate: Function | undefined;
  private container: HTMLElement;

  constructor(config: EditorConfig = DEFAULT_CONFIG) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };

    const { target, shader, uniforms }: any = this.config;

    if (!target || !shader || !uniforms)
      throw new Error('Initialization error.');

    createStyleSheet(styles);

    this.container = document.createElement('section');
    this.container.classList.add('editor');

    this.sizeContainer();

    target?.appendChild(this.container);

    this.shader = new Shader({
      target: this.container,
      shader,
      uniforms,
      debug: this.config.debug,
      onError: this.onError.bind(this),
      onSuccess: this.onSuccess.bind(this),
      width: this.config.width,
      height: this.config.height,
      dpr: this.config.dpr,
      fillViewport: this.config.fillViewport,
    });

    this._onUpdate = this.config.onUpdate;

    this.uniforms = [...uniforms] as UniformValue[];

    this.createEditorView();

    this.onPaste = this.onPaste.bind(this);
    this.sizeContainer = this.sizeContainer.bind(this);

    window.addEventListener('paste', this.onPaste);
    window.addEventListener('resize', this.sizeContainer);
  }

  sizeContainer() {
    const width = this.config.fillViewport
      ? window.innerWidth
      : this.config.width;
    const height = this.config.fillViewport
      ? window.innerHeight
      : this.config.height;
    this.container.style.position = 'relative';
    this.container.style.width = width + 'px';
    this.container.style.height = height + 'px';
    this.container.style.overflow = 'hidden';
  }

  onError({ line, message }: any) {
    this.config?.onError?.({ line, message });
    setErrorStyle({ line, message });
  }

  onSuccess() {
    this.config?.onSuccess?.();
    hideError();
  }

  onPaste({ clipboardData }: ClipboardEvent) {
    if (clipboardData === null) return;

    const string = clipboardData.getData('text');
    const isShaderToy = string.indexOf('mainImage') !== -1;

    if (isShaderToy) {
      this.config.shader = formatShadertoySource(string);

      this.shader.rebuild({
        shader: this.config.shader,
        uniforms: this.uniforms,
      });

      this.createEditorView();
    }
  }

  createState(
    shader: string = DEFAULT_FRAGMENT_SHADER,
    uniforms: UniformValue[any][] = DEFAULT_UNIFORMS
  ): EditorState {
    return EditorState.create({
      doc: shader.trim(),
      extensions: [
        basicSetup,
        keymap.of([defaultKeymap as any, indentWithTab]),
        oneDark,
        StreamLanguage.define(defineLanguageDetails(uniforms)),
        EditorView.updateListener.of(this.update.bind(this)),
      ],
    });
  }

  createEditorView(): void {
    this.editorView?.destroy?.();
    this.editorView = new EditorView({
      parent: this.container,
      state: this.createState(this.config.shader, this.config.uniforms),
    } as EditorViewConfig);
  }

  update(e: ViewUpdate) {
    const { state, docChanged }: any = e;
    if (!docChanged) return;
    const shader = state.doc.toString();
    this._onUpdate?.(shader);
    hideError();
    this.shader.rebuild({ shader, uniforms: this.uniforms });
  }

  destroy() {
    window.removeEventListener('paste', this.onPaste);
    this.editorView?.destroy();
  }
}
