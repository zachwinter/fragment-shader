import type { StreamParser } from '@codemirror/language';
import type { ShaderConfig } from './shader';

export interface EditorConfig extends ShaderConfig {
  onUpdate?: Function;
  document?: string;
  streamParser?: StreamParser<any>;
}
