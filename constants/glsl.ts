export const k_hue = /*glsl*/ `
vec4 k_hue(vec4 color, float shift) {
  float I = dot(color, vec4(0.596, -0.275, -0.321, 0.0));
  float Q = dot(color, vec4(0.212, -0.523, 0.311, 0.0));
  float hue = atan(Q, I);
  float chroma = sqrt(I * I + Q * Q);
  hue += shift;
  Q = chroma * sin(hue);
  I = chroma * cos(hue);
  vec4 yIQ = vec4(dot(color, vec4(0.299, 0.587, 0.114, 0.0)), I, Q, 0.0);
  color.r = dot(yIQ, vec4(1.0, 0.956, 0.621, 0.0));
  color.g = dot(yIQ, vec4(1.0, -0.272, -0.647, 0.0));
  color.b = dot(yIQ, vec4(1.0, -1.107, 1.704, 0.0));
  return color;
}
`;

export const k_kale = /*glsl*/ `
vec2 k_kale(vec2 uv, vec2 offset, float sides) {
  float angle = atan(uv.y, uv.x);
  angle = ((angle / 3.14159265359) + 1.0) * 0.5;
  angle = mod(angle, 1.0 / sides) * sides;
  angle = -abs(2.0 * angle - 1.0) + 1.0;
  angle = angle;
  float y = length(uv);
  angle = angle * (y);
  return vec2(angle, y) - offset;
}
`;

export const k_orb = /*glsl*/ `
vec4 k_orb(vec2 uv, float size, vec2 position, vec3 color, float contrast) {
  return pow(vec4(size / length(uv + position) * color, 1.), vec4(contrast));
}
`;

export const k_rainbow = /*glsl*/ `
vec3 k_rainbow(float progress, float stretch, float offset) {
  return vec3(cos(vec3(-2, 0, -1) * 3.14159265359 * 2. / 3. + (2. * 3.14159265359) * (progress * stretch) + offset) * 0.5 + 0.5);
}
`;

export const k_rotate2d = /* glsl */ `
mat2 k_rotate2d(float angle) {
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}
`;

export const k_swap = /* glsl */ `
vec2 k_swap(vec2 uv, vec2 uv2, bool val, bool valTween, float valTweenProgress) {
  return valTween
    ? (val ? mix(uv, uv2, valTweenProgress) : mix(uv2, uv, valTweenProgress))
    : (val ? uv2 : uv);
}
`;

export const k_uv = /* glsl */ `
vec2 k_uv (vec4 fragCoord) {
  vec2 uv = -1. + 2. * fragCoord.xy / resolution.xy;
  uv.x *= resolution.x / resolution.y;
  return uv;
}
`;

export const RAW_UTILS = {
  k_hue,
  k_kale,
  k_orb,
  k_rainbow,
  k_rotate2d,
  k_swap,
  k_uv,
} as any;

export const RAW_UTIL_KEYS = Object.keys(RAW_UTILS);

export const GLSL_UTILS = Object.keys(RAW_UTILS).reduce(
  (acc: string, key: string) => {
    acc += `${RAW_UTILS[key]}`;
    return acc;
  },
  '\n'
) as any;

export const BLOCKS = ['if', 'for', 'else', 'switch', 'while'] as any;

export const MATH = [
  'sin',
  'cos',
  'tan',
  'atan',
  'abs',
  'log',
  'dot',
  'exp',
] as any;

export const KEYWORDS = [
  'main',
  'stream',
  'resolution',
  'time',
  'volume',
  'gl_FragCoord',
  'gl_FragColor',
] as any;

export const TYPES = [
  'attribute',
  'bool',
  'bvec2',
  'bvec3',
  'bvec4',
  'centroid',
  'discard',
  'dmat2',
  'dmat2x2',
  'dmat2x3',
  'dmat2x4',
  'dmat3',
  'dmat3x2',
  'dmat3x3',
  'dmat3x4',
  'dmat4',
  'dmat4x2',
  'dmat4x3',
  'dmat4x4',
  'dvec2',
  'dvec3',
  'dvec4',
  'flat',
  'float',
  'highp',
  'in',
  'inout',
  'int',
  'invariant',
  'isampler1D',
  'isampler1DArray',
  'isampler2D',
  'isampler2DArray',
  'isampler2DMS',
  'isampler2DMSArray',
  'isampler2DRect',
  'isampler3D',
  'isamplerBuffer',
  'isamplerCube',
  'isamplerCubeArray',
  'ivec2',
  'ivec3',
  'ivec4',
  'layout',
  'lowp',
  'mat2',
  'mat2x2',
  'mat2x3',
  'mat2x4',
  'mat3',
  'mat3x2',
  'mat3x3',
  'mat3x4',
  'mat4',
  'mat4x2',
  'mat4x3',
  'mat4x4',
  'mediump',
  'noperspective',
  'out',
  'patch',
  'precision',
  'sample',
  'sampler1D',
  'sampler1DArray',
  'sampler1DArrayShadow',
  'sampler1DShadow',
  'sampler2D',
  'sampler2DArray',
  'sampler2DArrayShadow',
  'sampler2DMS',
  'sampler2DMSArray',
  'sampler2DRect',
  'sampler2DRectShadow',
  'sampler2DShadow',
  'sampler3D',
  'samplerBuffer',
  'samplerCube',
  'samplerCubeArray',
  'samplerCubeArrayShadow',
  'samplerCubeShadow',
  'smooth',
  'subroutine',
  'uniform',
  'usampler1D',
  'usampler1DArray',
  'usampler2D',
  'usampler2DArray',
  'usampler2DMS',
  'usampler2DMSArray',
  'usampler2DRect',
  'usampler3D',
  'usamplerBuffer',
  'usamplerCube',
  'usamplerCubeArray',
  'uvec2',
  'uvec3',
  'uvec4',
  'varying',
  'vec2',
  'vec3',
  'vec4',
  'void',
] as any;
