export const DEFAULT_VERTEX_SHADER = /*glsl*/ `
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0, 1);
}
`;

export const DEFAULT_FRAGMENT_SHADER = /*glsl*/ `
void main () {
  vec2 uv = -1. + 2. * gl_FragCoord.xy / resolution.xy;
  uv.x *= resolution.x / resolution.y;

  float r = sin(uv.x + time);
  float g = cos(uv.y + time);
  float b = sin(uv.y - time);

  gl_FragColor = vec4(r, g, b, 1.);
}
`;

export const DEFAULT_UNIFORMS = [
  ['zoom', 0, 0],
  ['pink', 3, [0.8, 0.2, 0.6]],
] as any;

export const INTERNAL_UNIFORMS = [
  ['time', 0, 0],
  ['stream', 0, 0],
  ['resolution', 2, [window.innerWidth, window.innerHeight]],
  ['volume', 0, 1],
  ['scroll', 0, 0],
] as any;

export const SHADER_TYPE_MAP = {
  0: 'float',
  1: 'bool',
  2: 'vec2',
  3: 'vec3',
  4: 'vec4',
} as any;

export const WEBGL_TYPE_MAP = {
  0: '1f',
  1: '1f',
  2: '2fv',
  3: '3fv',
  4: '4fv',
} as any;

export const DEFAULT_DEFS = [
  'precision lowp float;',
  '#define PI 3.14159265359',
  '#define TWO_PI 2. * PI',
  '#define iTime time',
  '#define iResolution resolution',
].join('\n') as any;

export const DEFAULT_UNIFORM_DECLARATIONS = `
  ${INTERNAL_UNIFORMS.reduce((acc: string, uniform: any) => {
    const key = uniform[0];
    const type = uniform[1] as any;
    acc += `uniform ${SHADER_TYPE_MAP[type]} ${key};\n`;
    return acc;
  }, '')}
` as any;
