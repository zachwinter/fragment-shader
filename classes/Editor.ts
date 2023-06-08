import { createShaderEditor } from '../util/editor';
import { type EditorConfig } from '../types/editor';
import Shader, { DEFAULT_SHADER_CONFIG } from './Shader';
import CodeEditor from './CodeEditor';
import '../css/editor.css';
import { UniformValue } from '../types/shader';

const DEFAULT_EDITOR_CONFIG: EditorConfig = {
  ...DEFAULT_SHADER_CONFIG,
  debug: true,
  onUpdate: () => {},
};

export default class Editor {
  private config: EditorConfig;
  private editor: CodeEditor;
  private shader: Shader;

  constructor(config: EditorConfig = DEFAULT_EDITOR_CONFIG) {
    this.config = {
      ...DEFAULT_EDITOR_CONFIG,
      ...config,
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.onError = this.onError.bind(this);
    this.onResize = this.onResize.bind(this);
    this.editor = createShaderEditor({
      ...this.config,
      onUpdate: this.onUpdate,
    });
    this.shader = new Shader({
      ...this.config,
      onError: this.onError,
      onResize: this.onResize,
    });
  }

  onUpdate(val: string) {
    this.editor.hideError();
    this.config?.onUpdate?.(val);
    this.shader.rebuild({ shader: val, uniforms: this.config.uniforms });
  }

  onError({ line, message }: { line: number; message: string }) {
    this.editor.showError({ line, message });
  }

  onResize() {
    this.editor.config.width = this.shader.config.width;
    this.editor.config.height = this.shader.config.height;
    this.editor.applyCSSVariables();
  }

  rebuild(config: { shader?: string; uniforms?: UniformValue[] } = {}) {
    const {
      shader,
      uniforms,
    }: {
      shader?: string;
      uniforms?: UniformValue[];
    } = {
      shader: '',
      uniforms: [],
      ...config,
    };

    this.shader.rebuild({ shader, uniforms });
  }

  destroy() {
    this.editor.destroy();
    this.shader.destroy();
  }
}
