import Uniform from './Uniform';
import Plane from './Plane';
import { createCanvas, sizeCanvas } from '../util/dom';
import { raf } from '../util/raf';
import GLSL_UTILS from '../constants/glsl';
import { ShaderConfig, ShaderState } from '../types/shader';
import { HasResolution } from '../types/dimensions';
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

const DEFAULT_CONFIG: ShaderConfig = {
  target: document.body,
  shader: DEFAULT_FRAGMENT_SHADER,
  uniforms: DEFAULT_UNIFORMS,
  width: window.innerWidth,
  height: window.innerHeight,
  dpr: window.devicePixelRatio,
  animate: true,
  debug: false,
};

export default class Shader {
  private config: ShaderConfig;
  private canvas: HTMLCanvasElement;
  private raf: any;
  private state: ShaderState;
  private uniforms: any;
  private shaders: any;
  private ctx: WebGL2RenderingContext | null;
  private program: WebGLProgram | any;
  private plane: Plane;
  public stream: number;
  public volume: number;

  constructor(
    configOrShader: ShaderConfig | string = DEFAULT_CONFIG,
    config: ShaderConfig = DEFAULT_CONFIG
  ) {
    if (typeof configOrShader === 'string') {
      this.config = {
        ...DEFAULT_CONFIG,
        ...config,
        shader: configOrShader,
      };
    } else {
      this.config = {
        ...DEFAULT_CONFIG,
        ...config,
      };
    }

    this.state = {
      active: false,
    };

    this.canvas = createCanvas(this.config.target);

    sizeCanvas(this.canvas, this.config as HasResolution);

    this.uniforms = {};
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
    this.buildUniforms();
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

    this.raf = raf(this.tick.bind(this));

    if (this.config.animate) this.start();
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
      ${DEFAULT_VERTEX_SHADER}
    `;
  }

  get fragmentShader(): string {
    return `
      ${DEFAULT_DEFS}
      ${DEFAULT_UNIFORM_DECLARATIONS}
      ${this.uniformDeclarations}
      ${GLSL_UTILS}
      ${this.config.shader}
    `;
  }

  buildUniforms(): void {
    const uniforms = [...INTERNAL_UNIFORMS, ...(this.config.uniforms || [])];

    this.uniforms = uniforms.reduce((acc, uniform: any) => {
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
          if (typeof this.config.onSuccess === 'function')
            this.config.onSuccess();
        } else if (typeof this.config?.onError === 'function') {
          const error = this.ctx.getShaderInfoLog(this.shaders[type]);
          this.config.onError(error);
        }
      } else {
        this.ctx.attachShader(this.program as any, this.shaders[type]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  start(): void {
    this.raf.start();
    this.state.active = true;
  }

  stop(): void {
    this.raf.stop();
    this.state.active = false;
  }

  tick(now: DOMHighResTimeStamp): void {
    const time = now;

    this.uniforms?.resolution?.set([this.canvas.width, this.canvas.height]);
    this.uniforms?.time?.set(time / 1000);
    this.uniforms?.stream?.set(this.stream ?? time / 1000);
    this.uniforms?.volume?.set(this.volume);
    this.config?.uniforms?.forEach(uniform => {
      this.uniforms[uniform[0]].set(
        uniform[1] === 0 ? uniform[2][0] : uniform[2]
      );
    });

    this.plane?.render();
  }
}
