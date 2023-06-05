import { EditorConfig } from './../types/editor';
import Shader from './Shader';
import { EditorView, basicSetup } from 'codemirror';
import { EditorViewConfig, ViewUpdate, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { clike } from '@codemirror/legacy-modes/mode/clike';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { StreamLanguage } from '@codemirror/language';
import { oneDark } from '@codemirror/theme-one-dark';
import { BLOCKS, KEYWORDS, MATH, TYPES, RAW_UTILS } from '../constants/glsl';
import type { Uniform } from '../types/shader';
import { DEFAULT_FRAGMENT_SHADER, DEFAULT_UNIFORMS } from '../constants/shader';

const buildAtoms = (uniforms: Uniform[]) => ({
  ...uniforms.reduce((acc: any, key: any) => {
    acc[key] = true;
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
};

export default class Editor {
  private editorView: EditorView;
  private shader: Shader;
  private uniforms: Uniform[];
  private config: EditorConfig;

  constructor(config: EditorConfig) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };

    const { target, shader, uniforms } = this.config;

    if (!target || !shader || !uniforms)
      throw new Error('Initialization error.');

    this.shader = new Shader({ target, shader, uniforms, debug: true });
    this.uniforms = [...uniforms] as Uniform[];
    this.editorView = this.createEditorView({
      target,
      shader,
      uniforms,
      size: {
        width: '100vw',
        height: '100vh',
      },
    });
  }

  createState(
    shader: string = DEFAULT_FRAGMENT_SHADER,
    uniforms: Uniform[any][] = DEFAULT_UNIFORMS
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

  createEditorView({
    target,
    shader,
    uniforms,
  }: {
    target: HTMLElement;
    shader: string;
    uniforms: Uniform[];
    size: {
      width: string;
      height: string;
    };
  }): EditorView {
    this.editorView?.destroy?.();
    return new EditorView({
      parent: target,
      state: this.createState(shader, uniforms as any),
    } as EditorViewConfig);
  }

  update(e: ViewUpdate) {
    const { state, docChanged }: any = e;
    if (!docChanged) return;
    this.shader.rebuild({
      shader: state.doc.toString(),
      uniforms: this.uniforms,
    });
  }
}
