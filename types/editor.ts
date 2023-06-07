import type { UniformValue } from './shader';

export interface EditorConfig {
  target?: HTMLElement;
  shader?: string;
  uniforms?: UniformValue[];
  showErrors?: boolean;
  onError?: Function;
  onSuccess?: Function;
  onUpdate?: Function;
  width?: number;
  height?: number;
  dpr?: number;
  fillViewport?: boolean;
  showLineNumbers?: boolean;
}
