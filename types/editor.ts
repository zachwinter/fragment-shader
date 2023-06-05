import type { Uniform } from './shader';

export interface EditorConfig {
  target?: HTMLElement;
  shader?: string;
  uniforms?: Uniform[];
}
