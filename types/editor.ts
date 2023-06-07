import type { UniformValue } from '../classes/Shader';

export interface EditorConfig {
  target?: HTMLElement;
  shader?: string;
  uniforms?: UniformValue[];
}
