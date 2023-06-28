import { createShaderEditor } from '../util/editor';
import { type EditorConfig } from '../types/editor';
import Shader, { DEFAULT_SHADER_CONFIG } from './Shader';
import BaseEditor from './BaseEditor';
import '../css/editor.css';
import { Uniform } from '../types/uniform';
import { HasResolution } from '../types/dimensions';

const DEFAULT_EDITOR_CONFIG: EditorConfig = {
  ...DEFAULT_SHADER_CONFIG,
  debug: true,
  onUpdate: () => {},
};

export default class Editor {
  private config: EditorConfig;
  private editor: BaseEditor;
  public shader: Shader;

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

  set size(resolution: HasResolution) {
    const width = resolution.width || window.innerWidth;
    const height = resolution.height || window.innerHeight;
    const dpr = resolution.dpr || window.devicePixelRatio;
    this.shader.size = { width, height, dpr };
  }

  onUpdate(val: string) {
    this.editor.hideError();
    this.config?.onUpdate?.(val);
    console.log(val)
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

  rebuild(config: { shader?: string; uniforms?: Uniform[] } = {}) {
    const {
      shader,
      uniforms,
    }: {
      shader?: string;
      uniforms?: Uniform[];
    } = {
      shader: '',
      uniforms: [],
      ...config,
    };

    this.config.shader = shader;
    this.config.uniforms = uniforms;
    this.editor.hideError();
    this.editor.destroy();
    this.editor = createShaderEditor({
      ...this.config,
      onUpdate: this.onUpdate,
    });
    this.shader.rebuild({ shader, uniforms });
  }

  destroy() {
    this.editor.destroy();
    this.shader.destroy();
  }
}
