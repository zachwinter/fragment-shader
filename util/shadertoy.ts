function extractShaderInputs(shaderCode: string) {
  const regex =
    /void\s+mainImage\s*\(\s*(?:out\s+)?vec4\s+(\w+)\s*,\s*(?:in\s+)?vec2\s+(\w+)\s*\)/;
  const match = shaderCode.match(regex);

  if (match) {
    const [, vec4Variable, vec2Variable] = match;
    return [vec4Variable.trim(), vec2Variable.trim()];
  }

  return [];
}

function transformMainFunction(shaderCode: string): string {
  const regex =
    /void\s+mainImage\s*\(\s*(\w*)\s+(\w*)\s+(\w*)\s*,\s*(\w*)\s+(\w*)\s+(\w*)\s*\)\s*{/;
  const match = shaderCode.match(regex);
  if (match) return shaderCode.replace(match[0], `void main() {`);
  return shaderCode;
}

function replaceVariableNames(shaderCode: string, variableMap: any) {
  const regex = /\b(\w+)\b/g;
  const replacedCode = shaderCode.replace(
    regex,
    (match: any, variableName: string) => {
      const replacementName = variableMap[variableName];
      return replacementName || match;
    }
  );

  return replacedCode;
}

function removeDefines(shaderCode: string): string {
  return [
    /#define\s+PI\s+\d+(\.\d+)?\s*\n/g,
    /#define\s+TWO_PI\s+[0-9.]*\s+\*\s+PI/g,
    /#define\s+TWO_PI\s+PI\s*\*\s*[0-9.]*/g,
  ].reduce((shader, exp) => {
    return shader.replace(exp, '');
  }, shaderCode);
}

export function formatShadertoySource(shader: string) {
  let copy: string = `${shader}`;

  copy = transformMainFunction(copy);
  copy = removeDefines(copy);

  const [color, coord] = extractShaderInputs(shader);

  copy = replaceVariableNames(copy, {
    [color]: 'gl_FragColor',
    [coord]: 'gl_FragCoord.xy',
    iTime: 'time',
    iResolution: 'resolution',
  });

  return copy;
}
