export interface ShaderConfig {
  parent?: HTMLElement;
  shader?: string;
  uniforms?: any[];
  width?: number;
  height?: number;
  fillViewport?: boolean;
  dpr?: number;
  onSuccess?: Function;
  onError?: Function;
  onResize?: Function;
  animate?: boolean;
  debug?: boolean;
}

export interface ShaderState {
  active: boolean;
}

export type UniformValue = [string, number, number[] | boolean];
