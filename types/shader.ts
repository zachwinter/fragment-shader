import { type Uniform } from "./uniform";
export interface ShaderConfig {
  parent?: HTMLElement;
  shader?: string;
  uniforms?: Uniform[]; 
  width?: number;
  height?: number;
  fillViewport?: boolean;
  fillContainer?: boolean;
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
