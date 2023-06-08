import Uniform from './Uniform';
import Plane from './Plane';
import { createCanvas, sizeCanvas } from '../util/dom';
import { raf } from '../util/raf';
import { GLSL_UTILS } from '../constants/glsl';
import { HasResolution } from '../types/dimensions';
import {
  type ShaderConfig,
  type ShaderState,
  type UniformValue,
} from '../types/shader';
import {
  DEFAULT_FRAGMENT_SHADER,
  DEFAULT_UNIFORMS,
  DEFAULT_UNIFORM_DECLARATIONS,
  DEFAULT_VERTEX_SHADER,
  SHADER_TYPE_MAP,
  WEBGL_TYPE_MAP,
  INTERNAL_UNIFORMS,
  DEFAULT_DEFS,
} from '../constants/shader';

export const DEFAULT_SHADER_CONFIG: ShaderConfig = {
  parent: document.body,
  shader: DEFAULT_FRAGMENT_SHADER,
  uniforms: DEFAULT_UNIFORMS,
  width: window.innerWidth,
  height: window.innerHeight,
  dpr: window.devicePixelRatio,
  fillViewport: true,
  animate: true,
  debug: false,
  onError: () => {},
  onSuccess: () => {},
  onResize: () => {},
};

export default class Shader {
  public config: ShaderConfig;
  private canvas: HTMLCanvasElement;
  private raf: any;
  private state: ShaderState;
  private _uniforms: any;
  private shaders: any;
  private ctx: WebGL2RenderingContext | null;
  private program: WebGLProgram | any;
  private plane: Plane;
  public stream: number;
  public volume: number;
  private _uniformMap: any;

  constructor(
    configOrShader: ShaderConfig | string = DEFAULT_SHADER_CONFIG,
    config: ShaderConfig = DEFAULT_SHADER_CONFIG
  ) {
    if (typeof configOrShader === 'string') {
      this.config = {
        ...DEFAULT_SHADER_CONFIG,
        ...config,
        shader: configOrShader,
      };
    } else {
      this.config = {
        ...DEFAULT_SHADER_CONFIG,
        ...configOrShader,
      };
    }

    console.log(this.config);

    this.state = {
      active: false,
    };

    this.canvas = createCanvas(this.config.parent);

    if (this.config.fillViewport) {
      this.canvas.style.position = 'absolute';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.zIndex = '0';
    }

    sizeCanvas(this.canvas, this.config as HasResolution);

    this.shaders = {};
    this.stream = 0;
    this.volume = 1;
    this.ctx = this.canvas.getContext('webgl2');

    if (!this.ctx) throw Error('WebGL initialization error.');

    this.program = this.ctx.createProgram() as any;
    this.compileShader(this.ctx.VERTEX_SHADER, this.vertexShader);
    this.compileShader(this.ctx.FRAGMENT_SHADER, this.fragmentShader);
    this.ctx.linkProgram(this.program as any);
    this.ctx.useProgram(this.program);
    this.ctx.viewport(0, 0, this.canvas.width, this.canvas.height);
    this._uniforms = this.buildUniforms();
    this.plane = new Plane(this.ctx);
    this.ctx.enableVertexAttribArray(0);
    this.ctx.vertexAttribPointer(
      this.ctx.getAttribLocation(this.program as any, 'position'),
      2,
      this.ctx.FLOAT,
      false,
      0,
      0
    );

    this.tick = this.tick.bind(this);
    this.setUniform = this.setUniform.bind(this);
    this.raf = raf(this.tick);

    if (this.config.animate) {
      this.start();
    } else {
      this.tick(window.performance.now());
    }

    if (this.config.fillViewport) {
      this.onWindowResize = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.onWindowResize);
    }
  }

  get uniformDeclarations(): string {
    return (this.config.uniforms || []).reduce((acc, [name, type]) => {
      acc += `uniform ${SHADER_TYPE_MAP[type]} ${name};\n`;

      if (type === 1) {
        acc += `uniform ${SHADER_TYPE_MAP[1]} ${name}Tween;\n`;
        acc += `uniform ${SHADER_TYPE_MAP[0]} ${name}TweenProgress;\n`;
      }
      return acc;
    }, '');
  }

  get vertexShader(): string {
    return `
      ${DEFAULT_DEFS}
      ${DEFAULT_UNIFORM_DECLARATIONS}
      ${this.uniformDeclarations}
      ${GLSL_UTILS}
      ${DEFAULT_VERTEX_SHADER}`;
  }

  get fragmentShader(): string {
    return `
      ${DEFAULT_DEFS}
      ${DEFAULT_UNIFORM_DECLARATIONS}
      ${this.uniformDeclarations}
      ${GLSL_UTILS}
      ${this.config.shader}`;
  }

  set uniforms(uniforms: UniformValue[]) {
    this.config.uniforms = uniforms;
  }

  set size(resolution: HasResolution) {
    const {
      width = window.innerWidth,
      height = window.innerHeight,
      dpr = window.devicePixelRatio,
    } = resolution;
    this.config.width = width;
    this.config.height = height;
    this.config.dpr = dpr;
    sizeCanvas(this.canvas, this.config as HasResolution);
    this.ctx?.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.config?.onResize?.();
  }

  setUniform(key: string, value: any) {
    try {
      const index = this._uniformMap[key];
      if (this.config.uniforms?.[index][2]) {
        this.config.uniforms[index][2] = value;
      }
    } catch (e) {
      console.warn(`Error setting uniform ${key}.`);
    }
  }

  buildUniforms(): UniformValue[] {
    const uniforms = [...INTERNAL_UNIFORMS, ...(this.config.uniforms || [])];

    this._uniformMap = this.config.uniforms?.reduce((acc, [name], i) => {
      acc[name] = i;
      return acc;
    }, {});

    return uniforms.reduce((acc, uniform: any) => {
      acc[uniform[0]] = new Uniform(
        this.ctx,
        WEBGL_TYPE_MAP[uniform[1]],
        this.ctx?.getUniformLocation(this.program, uniform[0])
      );

      if (uniform[1] === 1) {
        acc[`${uniform[0]}Tween`] = new Uniform(
          this.ctx,
          WEBGL_TYPE_MAP[1],
          this.ctx?.getUniformLocation(this.program, `${uniform[0]}Tween`)
        );

        acc[`${uniform[0]}TweenProgress`] = new Uniform(
          this.ctx,
          WEBGL_TYPE_MAP[0],
          this.ctx?.getUniformLocation(
            this.program,
            `${uniform[0]}TweenProgress`
          )
        );
      }

      return acc;
    }, {});
  }

  compileShader(type: any, source: string): void {
    if (!this.ctx) return;

    try {
      this.shaders[type] = this.ctx.createShader(type);
      this.ctx.shaderSource(this.shaders[type], source);
      this.ctx.compileShader(this.shaders[type]);

      if (this.config.debug) {
        const success = this.ctx?.getShaderParameter(
          this.shaders[type],
          this.ctx.COMPILE_STATUS
        );

        if (success && this.program) {
          this.ctx.attachShader(this.program, this.shaders[type]);
          if (type === this.ctx.FRAGMENT_SHADER) this.config?.onSuccess?.();
        } else {
          const hiddenLines = this.fragmentShader
            .split(this.config.shader || '')[0]
            .split('\n').length;
          const error = this.ctx.getShaderInfoLog(this.shaders[type]);
          const data = error?.split(':').map(v => v.trim()) || [];
          const line = parseInt(data[2], 10) + 1 - hiddenLines;
          const message = data[4].split('\n')[0];

          this.config?.onError?.({ line, message });
        }

        return;
      }

      this.ctx.attachShader(this.program as any, this.shaders[type]);
    } catch (error) {
      this.config?.onError?.(error);
    }
  }

  onWindowResize() {
    this.config.width = window.innerWidth;
    this.config.height = window.innerHeight;
    this.config.dpr = window.devicePixelRatio;
    sizeCanvas(this.canvas, this.config as HasResolution);
    this.ctx?.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.config?.onResize?.();
  }

  start(): void {
    this.raf.start();
    this.state.active = true;
  }

  stop(): void {
    this.raf.stop();
    this.state.active = false;
  }

  rebuild({ shader, uniforms = [] }: any) {
    this.config.shader = shader;
    this.config.uniforms = uniforms;

    try {
      this.destroy({ rebuild: true });
      this.program = this.ctx?.createProgram() as any;
      this.compileShader(this.ctx?.VERTEX_SHADER, this.vertexShader);
      this.compileShader(this.ctx?.FRAGMENT_SHADER, this.fragmentShader);
      this.ctx?.linkProgram(this.program as any);
      this.ctx?.useProgram(this.program);
      this.ctx?.viewport(0, 0, this.canvas.width, this.canvas.height);
      this._uniforms = this.buildUniforms();
      this.plane = new Plane(this.ctx);
      this.ctx?.enableVertexAttribArray(0);
      this.ctx?.vertexAttribPointer(
        this.ctx?.getAttribLocation(this.program as any, 'position'),
        2,
        this.ctx?.FLOAT,
        false,
        0,
        0
      );

      if (this.config.animate) {
        this.start();
      } else {
        requestAnimationFrame(this.tick);
      }
    } catch (e) {
      // console.log(e);
    }
  }

  tick(now: DOMHighResTimeStamp): void {
    const time = now / 1000;

    this._uniforms?.resolution?.set([this.canvas.width, this.canvas.height]);
    this._uniforms?.time?.set(time);
    this._uniforms?.stream?.set(time);
    this._uniforms?.volume?.set(this.volume);
    this.config?.uniforms?.forEach(uniform => {
      this._uniforms[uniform[0]].set(
        uniform[1] === 0 ? uniform[2][0] : uniform[2]
      );
    });

    this.plane?.render();
  }

  destroy({ rebuild = false } = {}) {
    if (this.config.animate) {
      this.stop();
    }

    this.ctx?.detachShader(
      this.program as any,
      this.shaders?.[this.ctx?.VERTEX_SHADER]
    );

    this.ctx?.detachShader(
      this.program as any,
      this.shaders?.[this.ctx?.FRAGMENT_SHADER]
    );

    this.ctx?.deleteShader(this.shaders?.[this.ctx?.FRAGMENT_SHADER]);
    this.ctx?.deleteShader(this.shaders?.[this.ctx?.VERTEX_SHADER]);
    this.ctx?.deleteShader(this.shaders?.[this.ctx?.FRAGMENT_SHADER]);
    this.ctx?.deleteProgram(this.program);

    if (rebuild) return;

    this.canvas.remove();

    window.removeEventListener('resize', this.onWindowResize);
  }
}
