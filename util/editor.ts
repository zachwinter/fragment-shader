import { clike } from '@codemirror/legacy-modes/mode/clike';
import { createStyleSheet } from './dom';
import { UniformValue } from '../types/shader';
import CodeEditor from '../classes/CodeEditor';
import { EditorConfig } from '../types/editor';
import {
  BLOCKS,
  KEYWORDS,
  MATH,
  TYPES,
  RAW_UTIL_KEYS,
} from '../constants/glsl';

interface ShaderEditorConfig {
  parent?: HTMLElement;
  shader?: string;
  uniforms?: UniformValue[];
  onUpdate?: Function;
  onError?: Function;
  width?: number;
  height?: number;
  fillViewport?: boolean;
}

const DEFAULT_PARENT = document.body;

const DEFAULT_CONFIG: ShaderEditorConfig = {
  parent: DEFAULT_PARENT,
  shader: '',
  uniforms: [],
  width: window.innerWidth,
  height: window.innerHeight,
  fillViewport: true,
};

function toKeyObject(arr: string[]) {
  return arr.reduce((acc: any, key: any) => ({ ...acc, [key]: true }), {});
}

export function createShaderEditor(
  config: ShaderEditorConfig = DEFAULT_CONFIG
): CodeEditor {
  const { parent, shader, uniforms, width, height, fillViewport } = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  const streamParser = clike({
    name: 'GLSL',
    blockKeywords: toKeyObject(BLOCKS),
    keywords: toKeyObject(KEYWORDS),
    builtin: toKeyObject(MATH),
    types: toKeyObject(TYPES),
    atoms: toKeyObject([...RAW_UTIL_KEYS, ...(uniforms || []).map(u => u[0])]),
  });

  return new CodeEditor({
    document: shader || '',
    parent: parent || DEFAULT_PARENT,
    streamParser,
    onUpdate: config.onUpdate,
    width,
    height,
    fillViewport,
  } as EditorConfig);
}

export function errorStyles() {
  const errorStylesheet = createStyleSheet();

  let errorStyleTimeout = 0;

  function showError({
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

  function destroyError() {
    errorStylesheet.remove();
  }

  return {
    showError,
    hideError,
    destroyError,
  };
}
