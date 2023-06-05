export interface ShaderConfig {
  target?: HTMLElement;
  shader?: string;
  uniforms?: any[];
  width?: number;
  height?: number;
  fillViewport?: boolean;
  dpr?: number;
  onSuccess?: Function;
  onError?: Function;
  animate?: boolean;
  debug?: boolean;
}

export interface ShaderState {
  active: boolean;
}
