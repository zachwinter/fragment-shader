import { randomNumber } from './numbers';

export function parseShaderVariables(glsl: string) {
  const regex = /(\b\w+\b)\s+(\b\w+\b)\s*;/g;
  const variables: any = {};

  const lines = glsl.split('\n');
  let lineNumber = 1;

  lines.forEach(line => {
    let match;
    while ((match = regex.exec(line)) !== null) {
      const variableName = match[1];
      const variableType = match[2];
      const instantiation = match[0];
      variables[variableName] = {
        type: variableType,
        line: lineNumber,
        instantiation: instantiation,
      };
    }
    lineNumber++;
  });

  return variables;
}

export function generateShader(root = 30) {
  const functions: string[] = ['sin', 'cos', 'sin', 'cos', 'atan'];
  const linearOperators: string[] = ['+', '-'];
  const operators: string[] = ['+', '-', '*'];
  const multi: string[] = ['*', '/'];
  const dimensions: string[] = ['x', 'y'];
  const channels: string = ['r', 'g', 'b'];
  const bool = () => Math.round(Math.random());
  const s = (array = []) =>
    array[Math.floor(Math.random() * array.length)] || undefined;
  const getChannelPair = a => (
    (a = s(channels)), [a, s(channels.filter(c => c !== a))]
  );
  const getDimensionPair = a => (
    (a = s(dimensions)), [a, s(dimensions.filter(c => c !== a))]
  );
  const getFunctionPair = a => (
    (a = s(functions)), [a, s(functions.filter(c => c !== a))]
  );

  let shader = /*glsl*/ `void main () {\n`;

  const uniforms = [
    ['zoom', 0, [root / 4]],
    ['mirror', 1, false],
    ['kaleidoscope', 1, true],
    ['warp', 1, false],
  ];
  let uniform = 0;
  const seed = (() => root / 2 + Math.random() * root)();
  const line = () => {
    const domain = () => [-seed * Math.random(), seed * Math.random()];
    let [x, y] = getDimensionPair();
    let [min, max] = domain();
    let a = bool() ? x : y;
    let b = a === x ? y : x;
    let val = () => {
      const value = parseFloat(randomNumber(min, max).toFixed(3));
      uniforms.push([`VAR_${uniform}`, 0, [value]]);
      uniform++;
      return `VAR_${uniform - 1}`;
    };
    let [func1, func2] = getFunctionPair();
    const S = [
      func1,
      a,
      s(multi),
      val(),
      s(linearOperators),
      func2,
      b,
      s(multi),
      val(),
      s(linearOperators),
    ];
    return `(${S[0]}(uv.${S[1]} ${S[2]} ${S[3]} ${S[4]} stream)\n    ${s(
      operators
    )} ${S[5]}(uv.${S[6]} ${S[7]} ${S[8]} ${S[9]} stream))`;
  };

  const r = `${line()} ${s(linearOperators)} ${line()}`;
  const g = `${line()} ${s(linearOperators)} ${line()}`;
  const b = `${line()} ${s(linearOperators)} ${line()}`;
  const rotation = 0 + Math.random() * 6;
  uniforms.push([`VAR_${uniform}`, 0, [rotation]]);
  uniform++;
  shader = /*glsl*/ `

void main () {
  vec2 uv = -1. + 2. * gl_FragCoord.xy / resolution;
  uv.x *= resolution.x / resolution.y;
  uv *= zoom;
  uv *= k_rotate2d(stream/-20.);
  vec2 kale = k_kale(uv, vec2(-1), ${Math.ceil(4 + Math.random() * 12)}.);
  uv = k_swap(uv, abs(uv), mirror, mirrorTween, mirrorTweenProgress);
  uv = k_swap(uv, kale, kaleidoscope, kaleidoscopeTween, kaleidoscopeTweenProgress);
  uv = k_swap(uv, 20. * uv / dot(uv, uv), warp, warpTween, warpTweenProgress);
  uv *= k_rotate2d(stream/15. + length(uv)/${`VAR_${uniform - 1}`});`;

  shader += /*glsl*/ `
  float r = ${r};
  float g = ${g};
  float b = ${b};\n`;

  let [r1, r2] = getChannelPair();
  let [g1, g2] = getChannelPair();
  let [b1, b2] = getChannelPair();

  shader += /*glsl */ `  gl_FragColor = vec4(${r1} ${s(linearOperators)} ${s(
    functions
  )}(${r2}), g ${s(operators)} ${g1} ${s(linearOperators)} ${s(
    functions
  )}(${g2}), b * ${b1} ${s(operators)} ${s(functions)}(${b2}), 1);

  gl_FragColor = k_hue(gl_FragColor, stream/1.);
}`;

  return [shader, uniforms];
}
