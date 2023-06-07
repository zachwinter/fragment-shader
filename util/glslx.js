(function () {
  var ch =
    Object.create ||
    function (a) {
      return { __proto__: a };
    };
  function rh(a, b) {
    (a.prototype = ch(b.prototype)), (a.prototype.constructor = a);
  }
  var sh =
    Math.imul ||
    function (a, b) {
      return (((a * (b >>> 16)) << 16) + a * (b & 65535)) | 0;
    };
  var $e;
  function th(a) {
    return typeof a === 'string';
  }
  function uh(a) {
    return a === null ? a : a + '';
  }
  function Ye(c, a, b) {
    return (c.a = a), (c.b = b), (c.c = a.length), c;
  }
  function Ze(c) {
    if (c.b >= c.c) return -1;
    var a = c.a.charCodeAt(((c.b = (c.b + 1) | 0) - 1) | 0);
    if ((a & 64512) ^ 55296) return a;
    if (c.b >= c.c) return -1;
    var b = c.a.charCodeAt(((c.b = (c.b + 1) | 0) - 1) | 0);
    return ((((a << 10) + b) | 0) - 56613888) | 0;
  }
  function uc(a) {
    return (a.c = (a.c + 1) | 0), a.c;
  }
  function Zc(v, a) {
    switch (a) {
      case 0:
        var b = {};
        return (
          Array.from(v.b.keys()).forEach(function (c) {
            b[c] = v.b.get(c);
          }),
          JSON.stringify(
            {
              shaders: v.a
                ? v.a.map(function (d) {
                    return { name: d.a, contents: d.b };
                  })
                : null,
              renaming: b,
            },
            null,
            2
          ) + '\n'
        );
      case 1:
        if (v.a) {
          for (
            var e = '', q = 0, E = v.a, F = E.length;
            q < F;
            q = (q + 1) | 0
          ) {
            var f = E[q];
            e +=
              'export const GLSLX_SOURCE_' +
              f.a
                .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                .toUpperCase() +
              ' = ' +
              JSON.stringify(f.b) +
              '\n';
          }
          if (v.b && Array.from(v.b.keys()).length) {
            e += '\n';
            for (
              var I = 0, O = Array.from(v.b.keys()), ha = O.length;
              I < ha;
              I = (I + 1) | 0
            ) {
              var h = O[I];
              e +=
                'export const GLSLX_NAME_' +
                h
                  .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                  .toUpperCase() +
                ' = ' +
                JSON.stringify(v.b.get(h)) +
                '\n';
            }
          }
          return e;
        }
        break;
      case 2:
        if (v.a) {
          var m = '';
          (m += '#ifndef GLSLX_STRINGS_H\n'),
            (m += '#define GLSLX_STRINGS_H\n'),
            (m += '\n');
          for (var M = 0, ia = v.a, Z = ia.length; M < Z; M = (M + 1) | 0) {
            var l = ia[M];
            m +=
              'static const char *GLSLX_SOURCE_' +
              l.a
                .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                .toUpperCase() +
              ' = ' +
              JSON.stringify(l.b) +
              ';\n';
          }
          if (((m += '\n'), v.b)) {
            for (
              var aa = 0, ea = Array.from(v.b.keys()), ua = ea.length;
              aa < ua;
              aa = (aa + 1) | 0
            ) {
              var g = ea[aa];
              m +=
                'static const char *GLSLX_NAME_' +
                g
                  .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                  .toUpperCase() +
                ' = ' +
                JSON.stringify(v.b.get(g)) +
                ';\n';
            }
            m += '\n';
          }
          return (m += '#endif\n'), m;
        }
        break;
      case 3:
        if (v.a) {
          for (
            var i = '', ba = 0, ka = v.a, va = ka.length;
            ba < va;
            ba = (ba + 1) | 0
          ) {
            var n = ka[ba];
            i +=
              'const GLSLX_SOURCE_' +
              n.a
                .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                .toUpperCase() +
              ' = ' +
              JSON.stringify(n.b) +
              '\n';
          }
          if (v.b && Array.from(v.b.keys()).length) {
            i += '\n';
            for (
              var Ta = 0, la = Array.from(v.b.keys()), rb = la.length;
              Ta < rb;
              Ta = (Ta + 1) | 0
            ) {
              var k = la[Ta];
              i +=
                'const GLSLX_NAME_' +
                k
                  .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                  .toUpperCase() +
                ' = ' +
                JSON.stringify(v.b.get(k)) +
                '\n';
            }
          }
          return i;
        }
        break;
      case 4:
        if (v.a) {
          for (
            var p = '', La = 0, Ua = v.a, wa = Ua.length;
            La < wa;
            La = (La + 1) | 0
          ) {
            var t = Ua[La];
            p +=
              'pub static GLSLX_SOURCE_' +
              t.a
                .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                .toUpperCase() +
              ': &str = ' +
              JSON.stringify(t.b) +
              ';\n';
          }
          if (v.b && Array.from(v.b.keys()).length) {
            p += '\n';
            for (
              var xa = 0, bb = Array.from(v.b.keys()), Ia = bb.length;
              xa < Ia;
              xa = (xa + 1) | 0
            ) {
              var w = bb[xa];
              p +=
                'pub static GLSLX_NAME_' +
                w
                  .replace(new RegExp('([a-z0-9])([A-Z])', 'g'), '$1_$2')
                  .toUpperCase() +
                ': &str = ' +
                JSON.stringify(v.b.get(w)) +
                ';\n';
            }
          }
          return p;
        }
        break;
    }
    return null;
  }
  function cf(a, b, c) {
    if (a.d) return null;
    b.unshift(
      new Zh(
        '<api>',
        "\nimport {\n  // The variable `gl_Position` is available only in the vertex language and is intended for writing the\n  // homogeneous vertex position. This value will be used by primitive assembly, clipping, culling, and other\n  // fixed functionality operations that operate on primitives after vertex processing has occurred.\n  //\n  // All executions of a well-formed vertex shader should write a value into this variable. It can be\n  // written at any time during shader execution. It may also be read back by the shader after being written.\n  // Compilers may generate a diagnostic message if they detect `gl_Position` is not written, or read before\n  // being written, but not all such cases are detectable. The value of `gl_Position` is undefined if a vertex\n  // shader is executed and does not write `gl_Position`.\n  highp vec4 gl_Position;\n\n  // The variable `gl_PointSize` is available only in the vertex language and is intended for\n  // a vertex shader to write the size of the point to be rasterized. It is measured in pixels.\n  mediump float gl_PointSize;\n\n  const int gl_MaxVertexAttribs;\n  const int gl_MaxVertexUniformVectors;\n  const int gl_MaxVaryingVectors;\n  const int gl_MaxVertexTextureImageUnits;\n  const int gl_MaxCombinedTextureImageUnits;\n  const int gl_MaxTextureImageUnits;\n  const int gl_MaxFragmentUniformVectors;\n  const int gl_MaxDrawBuffers;\n\n  // The fragment shader has access to the read-only built-in variable `gl_FrontFacing` whose value is `true` if\n  // the fragment belongs to a front-facing primitive. One use of this is to emulate two-sided lighting by\n  // selecting one of two colors calculated by the vertex shader.\n  const bool gl_FrontFacing;\n\n  // The fragment shader has access to the read-only built-in variable `gl_PointCoord`. The values in\n  // `gl_PointCoord` are two-dimensional coordinates indicating where within a point primitive the current\n  // fragment is located. They range from 0.0 to 1.0 across the point. If the current primitive is not a\n  // point, then the values read from `gl_PointCoord` are undefined.\n  const mediump vec2 gl_PointCoord;\n\n  // The variable `gl_FragCoord` is available as a read-only variable from within fragment shaders and it holds\n  // the window relative coordinates `x`, `y`, `z`, and `1/w` values for the fragment. This value is the result\n  // of the fixed functionality that interpolates primitives after vertex processing to generate fragments. The `z`\n  // component is the depth value that will be used for the fragment's depth.\n  const mediump vec4 gl_FragCoord;\n\n  // Writing to `gl_FragColor` specifies the fragment color that will be used by the subsequent fixed\n  // functionality pipeline.\n  //\n  // If subsequent fixed functionality consumes fragment color and an execution of a fragment shader\n  // does not write a value to `gl_FragColor` then the fragment color consumed is undefined.\n  mediump vec4 gl_FragColor;\n\n  // The variable `gl_FragData` is an array. Writing to `gl_FragData[n]` specifies the fragment data that will be\n  // used by the subsequent fixed functionality pipeline for data `n`.\n  //\n  // If subsequent fixed functionality consumes fragment data and an execution of a fragment shader does not write\n  // a value to it, then the fragment data consumed is undefined.\n  mediump vec4 gl_FragData[gl_MaxDrawBuffers];\n\n  // Depth range in window coordinates\n  struct gl_DepthRangeParameters {\n    float near;\n    float far;\n    // Equal to `far - near`\n    float diff;\n  };\n\n  uniform gl_DepthRangeParameters gl_DepthRange;\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Angle and Trigonometry Functions\n\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  float radians(float degrees);\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  vec2 radians(vec2 degrees);\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  vec3 radians(vec3 degrees);\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  vec4 radians(vec4 degrees);\n\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  float degrees(float radians);\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  vec2 degrees(vec2 radians);\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  vec3 degrees(vec3 radians);\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  vec4 degrees(vec4 radians);\n\n  // The standard trigonometric sine function.\n  float sin(float angle);\n  // The standard trigonometric sine function.\n  vec2 sin(vec2 angle);\n  // The standard trigonometric sine function.\n  vec3 sin(vec3 angle);\n  // The standard trigonometric sine function.\n  vec4 sin(vec4 angle);\n\n  // The standard trigonometric cosine function.\n  float cos(float angle);\n  // The standard trigonometric cosine function.\n  vec2 cos(vec2 angle);\n  // The standard trigonometric cosine function.\n  vec3 cos(vec3 angle);\n  // The standard trigonometric cosine function.\n  vec4 cos(vec4 angle);\n\n  // The standard trigonometric tangent.\n  float tan(float angle);\n  // The standard trigonometric tangent.\n  vec2 tan(vec2 angle);\n  // The standard trigonometric tangent.\n  vec3 tan(vec3 angle);\n  // The standard trigonometric tangent.\n  vec4 tan(vec4 angle);\n\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  float asin(float x);\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  vec2 asin(vec2 x);\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  vec3 asin(vec3 x);\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  vec4 asin(vec4 x);\n\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  float acos(float x);\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  vec2 acos(vec2 x);\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  vec3 acos(vec3 x);\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  vec4 acos(vec4 x);\n\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  float atan(float y, float x);\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  vec2 atan(vec2 y, vec2 x);\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  vec3 atan(vec3 y, vec3 x);\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  vec4 atan(vec4 y, vec4 x);\n\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  float atan(float y_over_x);\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  vec2 atan(vec2 y_over_x);\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  vec3 atan(vec3 y_over_x);\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  vec4 atan(vec4 y_over_x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Exponential Functions\n\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  float pow(float x, float y);\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  vec2 pow(vec2 x, vec2 y);\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  vec3 pow(vec3 x, vec3 y);\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  vec4 pow(vec4 x, vec4 y);\n\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  float exp(float x);\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  vec2 exp(vec2 x);\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  vec3 exp(vec3 x);\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  vec4 exp(vec4 x);\n\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  float log(float x);\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  vec2 log(vec2 x);\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  vec3 log(vec3 x);\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  vec4 log(vec4 x);\n\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  float exp2(float x);\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  vec2 exp2(vec2 x);\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  vec3 exp2(vec3 x);\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  vec4 exp2(vec4 x);\n\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  float log2(float x);\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  vec2 log2(vec2 x);\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  vec3 log2(vec3 x);\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  vec4 log2(vec4 x);\n\n  // Returns `√x`. Results are undefined if `x < 0`.\n  float sqrt(float x);\n  // Returns `√x`. Results are undefined if `x < 0`.\n  vec2 sqrt(vec2 x);\n  // Returns `√x`. Results are undefined if `x < 0`.\n  vec3 sqrt(vec3 x);\n  // Returns `√x`. Results are undefined if `x < 0`.\n  vec4 sqrt(vec4 x);\n\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  float inversesqrt(float x);\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  vec2 inversesqrt(vec2 x);\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  vec3 inversesqrt(vec3 x);\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  vec4 inversesqrt(vec4 x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Common Functions\n\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  float abs(float x);\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  vec2 abs(vec2 x);\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  vec3 abs(vec3 x);\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  vec4 abs(vec4 x);\n\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  float sign(float x);\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  vec2 sign(vec2 x);\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  vec3 sign(vec3 x);\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  vec4 sign(vec4 x);\n\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  float floor(float x);\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  vec2 floor(vec2 x);\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  vec3 floor(vec3 x);\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  vec4 floor(vec4 x);\n\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  float ceil(float x);\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  vec2 ceil(vec2 x);\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  vec3 ceil(vec3 x);\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  vec4 ceil(vec4 x);\n\n  // Returns `x - floor(x)`\n  float fract(float x);\n  // Returns `x - floor(x)`\n  vec2 fract(vec2 x);\n  // Returns `x - floor(x)`\n  vec3 fract(vec3 x);\n  // Returns `x - floor(x)`\n  vec4 fract(vec4 x);\n\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  float mod(float x, float y);\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  vec2 mod(vec2 x, float y);\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  vec3 mod(vec3 x, float y);\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  vec4 mod(vec4 x, float y);\n\n  // Modulus. Returns `x - y * floor(x/y)`\n  vec2 mod(vec2 x, vec2 y);\n  // Modulus. Returns `x - y * floor(x/y)`\n  vec3 mod(vec3 x, vec3 y);\n  // Modulus. Returns `x - y * floor(x/y)`\n  vec4 mod(vec4 x, vec4 y);\n\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  float min(float x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec2 min(vec2 x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec2 min(vec2 x, vec2 y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec3 min(vec3 x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec3 min(vec3 x, vec3 y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec4 min(vec4 x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec4 min(vec4 x, vec4 y);\n\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  float max(float x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec2 max(vec2 x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec2 max(vec2 x, vec2 y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec3 max(vec3 x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec3 max(vec3 x, vec3 y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec4 max(vec4 x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec4 max(vec4 x, vec4 y);\n\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  float clamp(float x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec2 clamp(vec2 x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec2 clamp(vec2 x, vec2 minVal, vec2 maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec3 clamp(vec3 x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec3 clamp(vec3 x, vec3 minVal, vec3 maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec4 clamp(vec4 x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec4 clamp(vec4 x, vec4 minVal, vec4 maxVal);\n\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  float mix(float x, float y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec2 mix(vec2 x, vec2 y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec2 mix(vec2 x, vec2 y, vec2 a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec3 mix(vec3 x, vec3 y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec3 mix(vec3 x, vec3 y, vec3 a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec4 mix(vec4 x, vec4 y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec4 mix(vec4 x, vec4 y, vec4 a);\n\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  float step(float edge, float x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec2 step(float edge, vec2 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec2 step(vec2 edge, vec2 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec3 step(float edge, vec3 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec3 step(vec3 edge, vec3 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec4 step(float edge, vec4 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec4 step(vec4 edge, vec4 x);\n\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  float smoothstep(float edge0, float edge1, float x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec2 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec2 smoothstep(float edge0, float edge1, vec2 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec2 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec2 smoothstep(vec2 edge0, vec2 edge1, vec2 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec3 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec3 smoothstep(float edge0, float edge1, vec3 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec3 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec3 smoothstep(vec3 edge0, vec3 edge1, vec3 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec4 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec4 smoothstep(float edge0, float edge1, vec4 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec4 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec4 smoothstep(vec4 edge0, vec4 edge1, vec4 x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Geometric Functions\n\n  // Returns the length of vector `x`, i.e. `√x²`\n  float length(float x);\n  // Returns the length of vector `x`, i.e. `√x[0]² + x[1]²`\n  float length(vec2 x);\n  // Returns the length of vector `x`, i.e. `√x[0]² + x[1]² + x[2]²`\n  float length(vec3 x);\n  // Returns the length of vector `x`, i.e. `√x[0]² + x[1]² + x[2]² + x[3]²`\n  float length(vec4 x);\n\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(float p0, float p1);\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(vec2 p0, vec2 p1);\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(vec3 p0, vec3 p1);\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(vec4 p0, vec4 p1);\n\n  // Returns the dot product of `x` and `y`, i.e. `x*y`\n  float dot(float x, float y);\n  // Returns the dot product of `x` and `y`, i.e. `x[0]*y[0] + x[1]*y[1]`\n  float dot(vec2 x, vec2 y);\n  // Returns the dot product of `x` and `y`, i.e. `x[0]*y[0] + x[1]*y[1] + x[2]*y[2]`\n  float dot(vec3 x, vec3 y);\n  // Returns the dot product of `x` and `y`, i.e. `x[0]*y[0] + x[1]*y[1] + x[2]*y[2] + x[3]*y[3]`\n  float dot(vec4 x, vec4 y);\n\n  // Returns the cross product of `x` and `y`, i.e.\n  //\n  // ```glslx\n  // vec3(\n  //   x[1]*y[2] - y[1]*x[2],\n  //   x[2]*y[0] - y[2]*x[0],\n  //   x[0]*y[1] - y[0]*x[1])\n  // ```\n  vec3 cross(vec3 x, vec3 y);\n\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  float normalize(float x);\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  vec2 normalize(vec2 x);\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  vec3 normalize(vec3 x);\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  vec4 normalize(vec4 x);\n\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  float faceforward(float N, float I, float Nref);\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  vec2 faceforward(vec2 N, vec2 I, vec2 Nref);\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  vec3 faceforward(vec3 N, vec3 I, vec3 Nref);\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  vec4 faceforward(vec4 N, vec4 I, vec4 Nref);\n\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  float reflect(float I, float N);\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  vec2 reflect(vec2 I, vec2 N);\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  vec3 reflect(vec3 I, vec3 N);\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  vec4 reflect(vec4 I, vec4 N);\n\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return float(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  float refract(float I, float N, float eta);\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return vec2(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  vec2 refract(vec2 I, vec2 N, float eta);\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return vec3(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  vec3 refract(vec3 I, vec3 N, float eta);\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return vec4(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  vec4 refract(vec4 I, vec4 N, float eta);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Matrix Functions\n\n  // Multiply matrix `x` by matrix `y` component-wise, i.e., `result[i][j]` is the scalar product of `x[i][j]` and `y[i][j]`.\n  // Note: to get linear algebraic matrix multiplication, use the multiply operator (`*`).\n  mat2 matrixCompMult(mat2 x, mat2 y);\n  // Multiply matrix `x` by matrix `y` component-wise, i.e., `result[i][j]` is the scalar product of `x[i][j]` and `y[i][j]`.\n  // Note: to get linear algebraic matrix multiplication, use the multiply operator (`*`).\n  mat3 matrixCompMult(mat3 x, mat3 y);\n  // Multiply matrix `x` by matrix `y` component-wise, i.e., `result[i][j]` is the scalar product of `x[i][j]` and `y[i][j]`.\n  // Note: to get linear algebraic matrix multiplication, use the multiply operator (`*`).\n  mat4 matrixCompMult(mat4 x, mat4 y);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Vector Relational Functions\n\n  // Returns the component-wise compare of `x < y`.\n  bvec2 lessThan(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec2 lessThan(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec3 lessThan(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec3 lessThan(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec4 lessThan(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec4 lessThan(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x <= y`.\n  bvec2 lessThanEqual(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec2 lessThanEqual(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec3 lessThanEqual(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec3 lessThanEqual(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec4 lessThanEqual(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec4 lessThanEqual(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x > y`.\n  bvec2 greaterThan(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec2 greaterThan(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec3 greaterThan(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec3 greaterThan(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec4 greaterThan(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec4 greaterThan(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x >= y`.\n  bvec2 greaterThanEqual(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec2 greaterThanEqual(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec3 greaterThanEqual(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec3 greaterThanEqual(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec4 greaterThanEqual(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec4 greaterThanEqual(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x == y`.\n  bvec2 equal(bvec2 x, bvec2 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec2 equal(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec2 equal(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec3 equal(bvec3 x, bvec3 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec3 equal(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec3 equal(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec4 equal(bvec4 x, bvec4 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec4 equal(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec4 equal(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x != y`.\n  bvec2 notEqual(bvec2 x, bvec2 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec2 notEqual(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec2 notEqual(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec3 notEqual(bvec3 x, bvec3 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec3 notEqual(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec3 notEqual(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec4 notEqual(bvec4 x, bvec4 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec4 notEqual(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec4 notEqual(vec4 x, vec4 y);\n\n  // Returns true if any component of `x` is `true`.\n  bool any(bvec2 x);\n  // Returns true if any component of `x` is `true`.\n  bool any(bvec3 x);\n  // Returns true if any component of `x` is `true`.\n  bool any(bvec4 x);\n\n  // Returns true only if all components of `x` are `true`.\n  bool all(bvec2 x);\n  // Returns true only if all components of `x` are `true`.\n  bool all(bvec3 x);\n  // Returns true only if all components of `x` are `true`.\n  bool all(bvec4 x);\n\n  // Returns the component-wise logical complement of `x`.\n  bvec2 not(bvec2 x);\n  // Returns the component-wise logical complement of `x`.\n  bvec3 not(bvec3 x);\n  // Returns the component-wise logical complement of `x`.\n  bvec4 not(bvec4 x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Texture Lookup Functions\n\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  vec4 texture2D(sampler2D sampler, vec2 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  vec4 texture2D(sampler2D sampler, vec2 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  vec4 texture2DLod(sampler2D sampler, vec2 coord, float lod);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`.\n  vec4 texture2DProj(sampler2D sampler, vec3 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`.\n  vec4 texture2DProj(sampler2D sampler, vec3 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`.\n  vec4 texture2DProjLod(sampler2D sampler, vec3 coord, float lod);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`. The third component of `coord` is ignored.\n  vec4 texture2DProj(sampler2D sampler, vec4 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`. The third component of `coord` is ignored.\n  vec4 texture2DProj(sampler2D sampler, vec4 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`. The third component of `coord` is ignored.\n  vec4 texture2DProjLod(sampler2D sampler, vec4 coord, float lod);\n\n  // Use the texture coordinate `coord` to do a texture lookup in the cube map texture currently bound to `sampler`.\n  // The direction of `coord` is used to select which face to do a 2-dimensional texture lookup in.\n  vec4 textureCube(samplerCube sampler, vec3 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the cube map texture currently bound to `sampler`.\n  // The direction of `coord` is used to select which face to do a 2-dimensional texture lookup in.\n  vec4 textureCube(samplerCube sampler, vec3 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the cube map texture currently bound to `sampler`.\n  // The direction of `coord` is used to select which face to do a 2-dimensional texture lookup in.\n  vec4 textureCubeLod(samplerCube sampler, vec3 coord, float lod);\n\n  #extension GL_OES_standard_derivatives {\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    float dFdx(float v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec2 dFdx(vec2 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec3 dFdx(vec3 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec4 dFdx(vec4 v);\n\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    float dFdy(float v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec2 dFdy(vec2 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec3 dFdy(vec3 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec4 dFdy(vec4 v);\n\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    float fwidth(float v);\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    vec2 fwidth(vec2 v);\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    vec3 fwidth(vec3 v);\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    vec4 fwidth(vec4 v);\n  }\n\n  #extension GL_EXT_frag_depth {\n    // Available only in the fragment language, `gl_FragDepthEXT` is an output variable that is used to establish the depth value for the current fragment.\n    // If depth buffering is enabled and no shader writes to `gl_FragDepthEXT`, then the fixed function value for depth will be used (this value is contained\n    // in the `z` component of `gl_FragCoord`) otherwise, the value written to `gl_FragDepthEXT` is used.\n    //\n    // If a shader statically assigns to `gl_FragDepthEXT`, then the value of the fragment's depth may be undefined for executions of the shader that take\n    // that path. That is, if the set of linked fragment shaders statically contain a write to `gl_FragDepthEXT`, then it is responsible for always writing it.\n    float gl_FragDepthEXT;\n  }\n\n  #extension GL_EXT_shader_texture_lod {\n    vec4 texture2DGradEXT(sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy);\n    vec4 texture2DLodEXT(sampler2D sampler, vec2 coord, float lod);\n    vec4 texture2DProjGradEXT(sampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy);\n    vec4 texture2DProjGradEXT(sampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy);\n    vec4 texture2DProjLodEXT(sampler2D sampler, vec3 coord, float lod);\n    vec4 texture2DProjLodEXT(sampler2D sampler, vec4 coord, float lod);\n    vec4 textureCubeGradEXT(samplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy);\n    vec4 textureCubeLodEXT(samplerCube sampler, vec3 coord, float lod);\n  }\n}\n"
      )
    );
    for (var n = 0, k = b.length; n < k; n = (n + 1) | 0) {
      var d = b[n];
      d.c = Lc(a, d, 0);
    }
    for (
      var e = new Lh(0),
        f = new Xh(1, null),
        h = new wh(c.e),
        m = new Vh(a, h),
        l = [],
        p = 0,
        t = b.length;
      p < t;
      p = (p + 1) | 0
    ) {
      var g = b[p],
        i = qd(a, g.c, e, h, f, m);
      bf(l, i.a);
    }
    return ud(m, e), new yh(e, l);
  }
  function Md(a, b, c) {
    if (a.d) return null;
    b.unshift(
      new Zh(
        '<api>',
        "\nimport {\n  // The variable `gl_Position` is available only in the vertex language and is intended for writing the\n  // homogeneous vertex position. This value will be used by primitive assembly, clipping, culling, and other\n  // fixed functionality operations that operate on primitives after vertex processing has occurred.\n  //\n  // All executions of a well-formed vertex shader should write a value into this variable. It can be\n  // written at any time during shader execution. It may also be read back by the shader after being written.\n  // Compilers may generate a diagnostic message if they detect `gl_Position` is not written, or read before\n  // being written, but not all such cases are detectable. The value of `gl_Position` is undefined if a vertex\n  // shader is executed and does not write `gl_Position`.\n  highp vec4 gl_Position;\n\n  // The variable `gl_PointSize` is available only in the vertex language and is intended for\n  // a vertex shader to write the size of the point to be rasterized. It is measured in pixels.\n  mediump float gl_PointSize;\n\n  const int gl_MaxVertexAttribs;\n  const int gl_MaxVertexUniformVectors;\n  const int gl_MaxVaryingVectors;\n  const int gl_MaxVertexTextureImageUnits;\n  const int gl_MaxCombinedTextureImageUnits;\n  const int gl_MaxTextureImageUnits;\n  const int gl_MaxFragmentUniformVectors;\n  const int gl_MaxDrawBuffers;\n\n  // The fragment shader has access to the read-only built-in variable `gl_FrontFacing` whose value is `true` if\n  // the fragment belongs to a front-facing primitive. One use of this is to emulate two-sided lighting by\n  // selecting one of two colors calculated by the vertex shader.\n  const bool gl_FrontFacing;\n\n  // The fragment shader has access to the read-only built-in variable `gl_PointCoord`. The values in\n  // `gl_PointCoord` are two-dimensional coordinates indicating where within a point primitive the current\n  // fragment is located. They range from 0.0 to 1.0 across the point. If the current primitive is not a\n  // point, then the values read from `gl_PointCoord` are undefined.\n  const mediump vec2 gl_PointCoord;\n\n  // The variable `gl_FragCoord` is available as a read-only variable from within fragment shaders and it holds\n  // the window relative coordinates `x`, `y`, `z`, and `1/w` values for the fragment. This value is the result\n  // of the fixed functionality that interpolates primitives after vertex processing to generate fragments. The `z`\n  // component is the depth value that will be used for the fragment's depth.\n  const mediump vec4 gl_FragCoord;\n\n  // Writing to `gl_FragColor` specifies the fragment color that will be used by the subsequent fixed\n  // functionality pipeline.\n  //\n  // If subsequent fixed functionality consumes fragment color and an execution of a fragment shader\n  // does not write a value to `gl_FragColor` then the fragment color consumed is undefined.\n  mediump vec4 gl_FragColor;\n\n  // The variable `gl_FragData` is an array. Writing to `gl_FragData[n]` specifies the fragment data that will be\n  // used by the subsequent fixed functionality pipeline for data `n`.\n  //\n  // If subsequent fixed functionality consumes fragment data and an execution of a fragment shader does not write\n  // a value to it, then the fragment data consumed is undefined.\n  mediump vec4 gl_FragData[gl_MaxDrawBuffers];\n\n  // Depth range in window coordinates\n  struct gl_DepthRangeParameters {\n    float near;\n    float far;\n    // Equal to `far - near`\n    float diff;\n  };\n\n  uniform gl_DepthRangeParameters gl_DepthRange;\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Angle and Trigonometry Functions\n\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  float radians(float degrees);\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  vec2 radians(vec2 degrees);\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  vec3 radians(vec3 degrees);\n  // Converts `degrees` to radians, i.e. `π / 180 * degrees`\n  vec4 radians(vec4 degrees);\n\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  float degrees(float radians);\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  vec2 degrees(vec2 radians);\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  vec3 degrees(vec3 radians);\n  // Converts `radians` to degrees, i.e. `180 / π * radians`\n  vec4 degrees(vec4 radians);\n\n  // The standard trigonometric sine function.\n  float sin(float angle);\n  // The standard trigonometric sine function.\n  vec2 sin(vec2 angle);\n  // The standard trigonometric sine function.\n  vec3 sin(vec3 angle);\n  // The standard trigonometric sine function.\n  vec4 sin(vec4 angle);\n\n  // The standard trigonometric cosine function.\n  float cos(float angle);\n  // The standard trigonometric cosine function.\n  vec2 cos(vec2 angle);\n  // The standard trigonometric cosine function.\n  vec3 cos(vec3 angle);\n  // The standard trigonometric cosine function.\n  vec4 cos(vec4 angle);\n\n  // The standard trigonometric tangent.\n  float tan(float angle);\n  // The standard trigonometric tangent.\n  vec2 tan(vec2 angle);\n  // The standard trigonometric tangent.\n  vec3 tan(vec3 angle);\n  // The standard trigonometric tangent.\n  vec4 tan(vec4 angle);\n\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  float asin(float x);\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  vec2 asin(vec2 x);\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  vec3 asin(vec3 x);\n  // Arc sine. Returns an angle whose sine is `x`. The range of values returned by this function is `[-π/2, π/2]`. Results are undefined if `∣x∣>1`.\n  vec4 asin(vec4 x);\n\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  float acos(float x);\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  vec2 acos(vec2 x);\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  vec3 acos(vec3 x);\n  // Arc cosine. Returns an angle whose cosine is `x`. The range of values returned by this function is `[0, π]`. Results are undefined if `∣x∣>1`.\n  vec4 acos(vec4 x);\n\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  float atan(float y, float x);\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  vec2 atan(vec2 y, vec2 x);\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  vec3 atan(vec3 y, vec3 x);\n  // Arc tangent. Returns an angle whose tangent is `y/x`. The signs of `x` and `y` are used to determine what quadrant the\n  // angle is in. The range of values returned by this function is `[−π,π]`. Results are undefined if `x` and `y` are both 0.\n  vec4 atan(vec4 y, vec4 x);\n\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  float atan(float y_over_x);\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  vec2 atan(vec2 y_over_x);\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  vec3 atan(vec3 y_over_x);\n  // Arc tangent. Returns an angle whose tangent is `y_over_x`. The range of values returned by this function is `[-π/2, π/2]`.\n  vec4 atan(vec4 y_over_x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Exponential Functions\n\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  float pow(float x, float y);\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  vec2 pow(vec2 x, vec2 y);\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  vec3 pow(vec3 x, vec3 y);\n  // Returns `x` raised to the `y` power, i.e., `xʸ`. Results are undefined if `x < 0`. Results are undefined if `x = 0` and `y <= 0`.\n  vec4 pow(vec4 x, vec4 y);\n\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  float exp(float x);\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  vec2 exp(vec2 x);\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  vec3 exp(vec3 x);\n  // Returns the natural exponentiation of `x`, i.e., `eˣ`\n  vec4 exp(vec4 x);\n\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  float log(float x);\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  vec2 log(vec2 x);\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  vec3 log(vec3 x);\n  // Returns the natural logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = eʸ`. Results are undefined if `x <= 0`.\n  vec4 log(vec4 x);\n\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  float exp2(float x);\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  vec2 exp2(vec2 x);\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  vec3 exp2(vec3 x);\n  // Returns 2 raised to the `x` power, i.e., `2ˣ`.\n  vec4 exp2(vec4 x);\n\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  float log2(float x);\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  vec2 log2(vec2 x);\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  vec3 log2(vec3 x);\n  // Returns the base 2 logarithm of `x`, i.e., returns the value `y` which satisfies the equation `x = 2ʸ`. Results are undefined if `x <= 0`.\n  vec4 log2(vec4 x);\n\n  // Returns `√x`. Results are undefined if `x < 0`.\n  float sqrt(float x);\n  // Returns `√x`. Results are undefined if `x < 0`.\n  vec2 sqrt(vec2 x);\n  // Returns `√x`. Results are undefined if `x < 0`.\n  vec3 sqrt(vec3 x);\n  // Returns `√x`. Results are undefined if `x < 0`.\n  vec4 sqrt(vec4 x);\n\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  float inversesqrt(float x);\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  vec2 inversesqrt(vec2 x);\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  vec3 inversesqrt(vec3 x);\n  // Returns `1 / √x`. Results are undefined if `x <= 0`.\n  vec4 inversesqrt(vec4 x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Common Functions\n\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  float abs(float x);\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  vec2 abs(vec2 x);\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  vec3 abs(vec3 x);\n  // Returns `x` if `x >= 0`, otherwise it returns `-x`.\n  vec4 abs(vec4 x);\n\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  float sign(float x);\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  vec2 sign(vec2 x);\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  vec3 sign(vec3 x);\n  // Returns `1.0` if `x > 0`, `0.0` if `x = 0`, or `-1.0` if `x < 0`\n  vec4 sign(vec4 x);\n\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  float floor(float x);\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  vec2 floor(vec2 x);\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  vec3 floor(vec3 x);\n  // Returns a value equal to the nearest integer that is less than or equal to `x`\n  vec4 floor(vec4 x);\n\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  float ceil(float x);\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  vec2 ceil(vec2 x);\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  vec3 ceil(vec3 x);\n  // Returns a value equal to the nearest integer that is greater than or equal to `x`\n  vec4 ceil(vec4 x);\n\n  // Returns `x - floor(x)`\n  float fract(float x);\n  // Returns `x - floor(x)`\n  vec2 fract(vec2 x);\n  // Returns `x - floor(x)`\n  vec3 fract(vec3 x);\n  // Returns `x - floor(x)`\n  vec4 fract(vec4 x);\n\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  float mod(float x, float y);\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  vec2 mod(vec2 x, float y);\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  vec3 mod(vec3 x, float y);\n  // Modulus (modulo). Returns `x - y * floor(x/y)`\n  vec4 mod(vec4 x, float y);\n\n  // Modulus. Returns `x - y * floor(x/y)`\n  vec2 mod(vec2 x, vec2 y);\n  // Modulus. Returns `x - y * floor(x/y)`\n  vec3 mod(vec3 x, vec3 y);\n  // Modulus. Returns `x - y * floor(x/y)`\n  vec4 mod(vec4 x, vec4 y);\n\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  float min(float x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec2 min(vec2 x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec2 min(vec2 x, vec2 y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec3 min(vec3 x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec3 min(vec3 x, vec3 y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec4 min(vec4 x, float y);\n  // Returns `y` if `y < x`, otherwise it returns `x`\n  vec4 min(vec4 x, vec4 y);\n\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  float max(float x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec2 max(vec2 x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec2 max(vec2 x, vec2 y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec3 max(vec3 x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec3 max(vec3 x, vec3 y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec4 max(vec4 x, float y);\n  // Returns `y` if `x < y`, otherwise it returns `x`\n  vec4 max(vec4 x, vec4 y);\n\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  float clamp(float x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec2 clamp(vec2 x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec2 clamp(vec2 x, vec2 minVal, vec2 maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec3 clamp(vec3 x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec3 clamp(vec3 x, vec3 minVal, vec3 maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec4 clamp(vec4 x, float minVal, float maxVal);\n  // Returns `min(max(x, minVal), maxVal)`. Results are undefined if `minVal > maxVal`.\n  vec4 clamp(vec4 x, vec4 minVal, vec4 maxVal);\n\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  float mix(float x, float y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec2 mix(vec2 x, vec2 y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec2 mix(vec2 x, vec2 y, vec2 a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec3 mix(vec3 x, vec3 y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec3 mix(vec3 x, vec3 y, vec3 a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec4 mix(vec4 x, vec4 y, float a);\n  // Returns the linear blend of `x` and `y`, i.e. `x * (1-a) + y * a`\n  vec4 mix(vec4 x, vec4 y, vec4 a);\n\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  float step(float edge, float x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec2 step(float edge, vec2 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec2 step(vec2 edge, vec2 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec3 step(float edge, vec3 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec3 step(vec3 edge, vec3 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec4 step(float edge, vec4 x);\n  // Returns `0.0` if `x < edge`, otherwise it returns `1.0`\n  vec4 step(vec4 edge, vec4 x);\n\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  float smoothstep(float edge0, float edge1, float x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec2 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec2 smoothstep(float edge0, float edge1, vec2 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec2 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec2 smoothstep(vec2 edge0, vec2 edge1, vec2 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec3 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec3 smoothstep(float edge0, float edge1, vec3 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec3 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec3 smoothstep(vec3 edge0, vec3 edge1, vec3 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec4 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec4 smoothstep(float edge0, float edge1, vec4 x);\n  // Returns `0.0` if `x <= edge0` and `1.0` if `x >= edge1` and performs smooth Hermite interpolation between 0 and 1 when `edge0 < x < edge1`.\n  // This is useful in cases where you would want a threshold function with a smooth transition. This is equivalent to:\n  //\n  // ```glslx\n  // vec4 t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n  // return t * t * (3.0 - 2.0 * t);\n  // ```\n  //\n  // Results are undefined if `edge0 >= edge1`.\n  vec4 smoothstep(vec4 edge0, vec4 edge1, vec4 x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Geometric Functions\n\n  // Returns the length of vector `x`, i.e. `√x²`\n  float length(float x);\n  // Returns the length of vector `x`, i.e. `√x[0]² + x[1]²`\n  float length(vec2 x);\n  // Returns the length of vector `x`, i.e. `√x[0]² + x[1]² + x[2]²`\n  float length(vec3 x);\n  // Returns the length of vector `x`, i.e. `√x[0]² + x[1]² + x[2]² + x[3]²`\n  float length(vec4 x);\n\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(float p0, float p1);\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(vec2 p0, vec2 p1);\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(vec3 p0, vec3 p1);\n  // Returns the distance between `p0` and `p1`, i.e. `length(p0 - p1)`\n  float distance(vec4 p0, vec4 p1);\n\n  // Returns the dot product of `x` and `y`, i.e. `x*y`\n  float dot(float x, float y);\n  // Returns the dot product of `x` and `y`, i.e. `x[0]*y[0] + x[1]*y[1]`\n  float dot(vec2 x, vec2 y);\n  // Returns the dot product of `x` and `y`, i.e. `x[0]*y[0] + x[1]*y[1] + x[2]*y[2]`\n  float dot(vec3 x, vec3 y);\n  // Returns the dot product of `x` and `y`, i.e. `x[0]*y[0] + x[1]*y[1] + x[2]*y[2] + x[3]*y[3]`\n  float dot(vec4 x, vec4 y);\n\n  // Returns the cross product of `x` and `y`, i.e.\n  //\n  // ```glslx\n  // vec3(\n  //   x[1]*y[2] - y[1]*x[2],\n  //   x[2]*y[0] - y[2]*x[0],\n  //   x[0]*y[1] - y[0]*x[1])\n  // ```\n  vec3 cross(vec3 x, vec3 y);\n\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  float normalize(float x);\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  vec2 normalize(vec2 x);\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  vec3 normalize(vec3 x);\n  // Returns a vector in the same direction as `x` but with a length of 1.\n  vec4 normalize(vec4 x);\n\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  float faceforward(float N, float I, float Nref);\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  vec2 faceforward(vec2 N, vec2 I, vec2 Nref);\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  vec3 faceforward(vec3 N, vec3 I, vec3 Nref);\n  // If `dot(Nref, I) < 0` return `N`, otherwise return `-N`\n  vec4 faceforward(vec4 N, vec4 I, vec4 Nref);\n\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  float reflect(float I, float N);\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  vec2 reflect(vec2 I, vec2 N);\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  vec3 reflect(vec3 I, vec3 N);\n  // For the incident vector `I` and surface orientation `N`, returns the reflection direction: `I - 2 * dot(N, I) * N`.\n  // `N` must already be normalized in order to achieve the desired result.\n  vec4 reflect(vec4 I, vec4 N);\n\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return float(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  float refract(float I, float N, float eta);\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return vec2(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  vec2 refract(vec2 I, vec2 N, float eta);\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return vec3(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  vec3 refract(vec3 I, vec3 N, float eta);\n  // For the incident vector `I` and surface normal `N`, and the ratio of indices of refraction `eta`, return the refraction vector.\n  // The result is computed by:\n  //\n  // ```glslx\n  // float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));\n  // if (k < 0.0) return vec4(0.0);\n  // else return eta * I - (eta * dot(N, I) + sqrt(k)) * N;\n  // ```\n  //\n  // The input parameters for the incident vector `I` and the surface normal `N`.\n  vec4 refract(vec4 I, vec4 N, float eta);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Matrix Functions\n\n  // Multiply matrix `x` by matrix `y` component-wise, i.e., `result[i][j]` is the scalar product of `x[i][j]` and `y[i][j]`.\n  // Note: to get linear algebraic matrix multiplication, use the multiply operator (`*`).\n  mat2 matrixCompMult(mat2 x, mat2 y);\n  // Multiply matrix `x` by matrix `y` component-wise, i.e., `result[i][j]` is the scalar product of `x[i][j]` and `y[i][j]`.\n  // Note: to get linear algebraic matrix multiplication, use the multiply operator (`*`).\n  mat3 matrixCompMult(mat3 x, mat3 y);\n  // Multiply matrix `x` by matrix `y` component-wise, i.e., `result[i][j]` is the scalar product of `x[i][j]` and `y[i][j]`.\n  // Note: to get linear algebraic matrix multiplication, use the multiply operator (`*`).\n  mat4 matrixCompMult(mat4 x, mat4 y);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Vector Relational Functions\n\n  // Returns the component-wise compare of `x < y`.\n  bvec2 lessThan(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec2 lessThan(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec3 lessThan(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec3 lessThan(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec4 lessThan(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x < y`.\n  bvec4 lessThan(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x <= y`.\n  bvec2 lessThanEqual(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec2 lessThanEqual(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec3 lessThanEqual(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec3 lessThanEqual(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec4 lessThanEqual(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x <= y`.\n  bvec4 lessThanEqual(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x > y`.\n  bvec2 greaterThan(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec2 greaterThan(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec3 greaterThan(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec3 greaterThan(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec4 greaterThan(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x > y`.\n  bvec4 greaterThan(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x >= y`.\n  bvec2 greaterThanEqual(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec2 greaterThanEqual(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec3 greaterThanEqual(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec3 greaterThanEqual(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec4 greaterThanEqual(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x >= y`.\n  bvec4 greaterThanEqual(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x == y`.\n  bvec2 equal(bvec2 x, bvec2 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec2 equal(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec2 equal(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec3 equal(bvec3 x, bvec3 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec3 equal(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec3 equal(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec4 equal(bvec4 x, bvec4 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec4 equal(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x == y`.\n  bvec4 equal(vec4 x, vec4 y);\n\n  // Returns the component-wise compare of `x != y`.\n  bvec2 notEqual(bvec2 x, bvec2 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec2 notEqual(ivec2 x, ivec2 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec2 notEqual(vec2 x, vec2 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec3 notEqual(bvec3 x, bvec3 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec3 notEqual(ivec3 x, ivec3 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec3 notEqual(vec3 x, vec3 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec4 notEqual(bvec4 x, bvec4 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec4 notEqual(ivec4 x, ivec4 y);\n  // Returns the component-wise compare of `x != y`.\n  bvec4 notEqual(vec4 x, vec4 y);\n\n  // Returns true if any component of `x` is `true`.\n  bool any(bvec2 x);\n  // Returns true if any component of `x` is `true`.\n  bool any(bvec3 x);\n  // Returns true if any component of `x` is `true`.\n  bool any(bvec4 x);\n\n  // Returns true only if all components of `x` are `true`.\n  bool all(bvec2 x);\n  // Returns true only if all components of `x` are `true`.\n  bool all(bvec3 x);\n  // Returns true only if all components of `x` are `true`.\n  bool all(bvec4 x);\n\n  // Returns the component-wise logical complement of `x`.\n  bvec2 not(bvec2 x);\n  // Returns the component-wise logical complement of `x`.\n  bvec3 not(bvec3 x);\n  // Returns the component-wise logical complement of `x`.\n  bvec4 not(bvec4 x);\n\n  ////////////////////////////////////////////////////////////////////////////////\n  // Texture Lookup Functions\n\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  vec4 texture2D(sampler2D sampler, vec2 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  vec4 texture2D(sampler2D sampler, vec2 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  vec4 texture2DLod(sampler2D sampler, vec2 coord, float lod);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`.\n  vec4 texture2DProj(sampler2D sampler, vec3 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`.\n  vec4 texture2DProj(sampler2D sampler, vec3 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`.\n  vec4 texture2DProjLod(sampler2D sampler, vec3 coord, float lod);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`. The third component of `coord` is ignored.\n  vec4 texture2DProj(sampler2D sampler, vec4 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`. The third component of `coord` is ignored.\n  vec4 texture2DProj(sampler2D sampler, vec4 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the 2D texture currently bound to `sampler`.\n  // The texture coordinate `(coord.s, coord.t)` is divided by the last component of `coord`. The third component of `coord` is ignored.\n  vec4 texture2DProjLod(sampler2D sampler, vec4 coord, float lod);\n\n  // Use the texture coordinate `coord` to do a texture lookup in the cube map texture currently bound to `sampler`.\n  // The direction of `coord` is used to select which face to do a 2-dimensional texture lookup in.\n  vec4 textureCube(samplerCube sampler, vec3 coord);\n  // Use the texture coordinate `coord` to do a texture lookup in the cube map texture currently bound to `sampler`.\n  // The direction of `coord` is used to select which face to do a 2-dimensional texture lookup in.\n  vec4 textureCube(samplerCube sampler, vec3 coord, float bias);\n  // Use the texture coordinate `coord` to do a texture lookup in the cube map texture currently bound to `sampler`.\n  // The direction of `coord` is used to select which face to do a 2-dimensional texture lookup in.\n  vec4 textureCubeLod(samplerCube sampler, vec3 coord, float lod);\n\n  #extension GL_OES_standard_derivatives {\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    float dFdx(float v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec2 dFdx(vec2 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec3 dFdx(vec3 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `x` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdx(dFdx(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec4 dFdx(vec4 v);\n\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    float dFdy(float v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec2 dFdy(vec2 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec3 dFdy(vec3 v);\n    // Available only in the fragment shader, this function returns the partial derivative of expression `p` with respect to the window `y` coordinate.\n    //\n    // Expressions that imply higher order derivatives such as `dFdy(dFdy(n))` have undefined results, as do mixed-order derivatives such as\n    // `dFdx(dFdy(n))`. It is assumed that the expression `p` is continuous and therefore, expressions evaluated via non-uniform control flow may be undefined.\n    vec4 dFdy(vec4 v);\n\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    float fwidth(float v);\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    vec2 fwidth(vec2 v);\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    vec3 fwidth(vec3 v);\n    // Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`, i.e. `abs(dFdx(p)) + abs(dFdy(p))`\n    vec4 fwidth(vec4 v);\n  }\n\n  #extension GL_EXT_frag_depth {\n    // Available only in the fragment language, `gl_FragDepthEXT` is an output variable that is used to establish the depth value for the current fragment.\n    // If depth buffering is enabled and no shader writes to `gl_FragDepthEXT`, then the fixed function value for depth will be used (this value is contained\n    // in the `z` component of `gl_FragCoord`) otherwise, the value written to `gl_FragDepthEXT` is used.\n    //\n    // If a shader statically assigns to `gl_FragDepthEXT`, then the value of the fragment's depth may be undefined for executions of the shader that take\n    // that path. That is, if the set of linked fragment shaders statically contain a write to `gl_FragDepthEXT`, then it is responsible for always writing it.\n    float gl_FragDepthEXT;\n  }\n\n  #extension GL_EXT_shader_texture_lod {\n    vec4 texture2DGradEXT(sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy);\n    vec4 texture2DLodEXT(sampler2D sampler, vec2 coord, float lod);\n    vec4 texture2DProjGradEXT(sampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy);\n    vec4 texture2DProjGradEXT(sampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy);\n    vec4 texture2DProjLodEXT(sampler2D sampler, vec3 coord, float lod);\n    vec4 texture2DProjLodEXT(sampler2D sampler, vec4 coord, float lod);\n    vec4 textureCubeGradEXT(samplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy);\n    vec4 textureCubeLodEXT(samplerCube sampler, vec3 coord, float lod);\n  }\n}\n"
      )
    );
    for (var O = 0, ha = b.length; O < ha; O = (O + 1) | 0) {
      var d = b[O];
      d.c = Lc(a, d, 0);
    }
    for (
      var e = new Lh(0),
        f = new Xh(1, null),
        h = new wh(c.e),
        m = new Vh(a, h),
        M = 0,
        ia = b.length;
      M < ia;
      M = (M + 1) | 0
    ) {
      var l = b[M];
      qd(a, l.c, e, h, f, m);
    }
    if ((ud(m, e), a.d)) return null;
    for (
      var g = [], i = [], ea = 0, ua = df(f), ba = ua.length;
      ea < ba;
      ea = (ea + 1) | 0
    ) {
      for (
        var n = ua[ea],
          k = new Lh(0),
          p = new Xh(1, null),
          t = new wh(c.e),
          w = new Kh(),
          v = new Vh(w, t),
          Z = 0,
          aa = b.length;
        Z < aa;
        Z = (Z + 1) | 0
      ) {
        var q = b[Z];
        qd(w, q.c, k, t, p, v);
      }
      ud(v, k), ef(p, n), Dg(k, t, c), i.push(k), g.push(n.c);
    }
    for (
      var E = [], F = sg(new Th(c.c), i), I = 0, ka = g.length;
      I < ka;
      I = (I + 1) | 0
    )
      E.push(new Zh(g[I], new Ah(i[I], c).a));
    return new xh(E, F);
  }
  function df(a) {
    for (
      var b = [], d = 0, e = Array.from(a.c.values()), f = e.length;
      d < f;
      d = (d + 1) | 0
    ) {
      var c = e[d];
      c instanceof mc && c.e & 1024 && b.push(c);
    }
    return b;
  }
  function ef(a, b) {
    for (
      var e = 0, f = Array.from(a.c.values()), h = f.length;
      e < h;
      e = (e + 1) | 0
    ) {
      var c = f[e];
      if (c.a ^ b.a) c.e &= -1025;
      else {
        c.c = 'main';
        var d = c.w;
        d && (d.c = c.c);
      }
    }
  }
  function ff(c, a) {
    var b = a.l;
    c.b.push(c.b.length == 0 || Yc(c.b)), b && ie(b.b) && c.a.push(!1);
  }
  function gf(d, a) {
    var b = a.l,
      c = d.b.pop();
    c && (a.p = !0),
      b &&
        ie(b.b) &&
        !d.a.pop() &&
        ((b.b == 19 && Ra(b.g)) ||
          (b.b == 7 && Ra(b.i)) ||
          (b.b == 10 && (!Ca(b) || Ra(Ca(b))))) &&
        hb(d.b, !1);
  }
  function Nd(e, a) {
    if (Yc(e.b))
      switch (a.b) {
        case 4:
          e.a.length && hb(e.a, !0), hb(e.b, !1);
          break;
        case 15:
        case 6:
        case 5:
          hb(e.b, !1);
          break;
        case 12:
          var b = a.g,
            c = a.g.k,
            d = a.g.k.k;
          Ra(b)
            ? c.p || hb(e.b, !1)
            : Gb(b) && d
            ? d.p || hb(e.b, !1)
            : c && d && !c.p && !d.p && hb(e.b, !1);
          break;
      }
  }
  function hf(a, b) {
    return (
      Od(a) ||
      Od(b) ||
      (a.b != b.b && (a.b == 14 || b.b == 14 || a.b == 9 || b.b == 9))
    );
  }
  function Od(a) {
    return a.b == 11 && a.e.p != null;
  }
  function Pd(a, b) {
    var c = a.toString(),
      d = a.toExponential();
    d.length < c.length && (c = d);
    var e = c.indexOf('e'),
      f = '';
    return (
      ~e && ((f = c.slice(e)), (c = c.slice(0, e))),
      (c = (+(+c).toFixed(6)).toString()),
      f == '' && c.indexOf('.') == -1 && (c += b ^ 1 ? '.0' : '.'),
      b == 1 && c.startsWith('0.') && c != '0.' && (c = c.slice(1)),
      b == 1 && c.startsWith('-0.') && c != '-0.' && (c = '-' + c.slice(2)),
      c + f
    );
  }
  function jf(b, a) {
    switch (a.b) {
      case 11:
      case 16:
        return (a.e.e & 2048) != 0;
      case 17:
        return ((a.h | 0) & 2048) != 0;
    }
    return !1;
  }
  function _c(a) {
    a.e || (a.b += '  ');
  }
  function $c(a) {
    a.e || (a.b = a.b.slice(2));
  }
  function Va(i, a) {
    switch (a.b) {
      case 3:
        if (!a.g && a.l) i.a += ';';
        else {
          (i.a += '{' + i.c), _c(i);
          for (var b = a.g; b; b = b.k) (i.a += i.b), Va(i, b), (i.a += i.c);
          $c(i), (i.a += i.b + '}');
        }
        break;
      case 4:
        i.a += 'break;';
        break;
      case 5:
        i.a += 'continue;';
        break;
      case 6:
        i.a += 'discard;';
        break;
      case 7:
        (i.a += 'do'),
          cc(i, a.g, 0),
          (i.a += i.c + i.b + 'while' + i.d + '('),
          J(i, a.i, 0),
          (i.a += ');');
        break;
      case 8:
        J(i, a.g, 0), (i.a += ';');
        break;
      case 9:
        Qd(i), (i.a += '#extension ' + a.m + i.d + ':' + i.d);
        switch (a.h | 0) {
          case 1:
            i.a += 'disable';
            break;
          case 2:
            i.a += 'enable';
            break;
          case 3:
            i.a += 'require';
            break;
          case 4:
            i.a += 'warn';
            break;
        }
        Rd(i);
        break;
      case 10:
        (i.a += 'for' + i.d + '('),
          kb(a)
            ? kb(a).b ^ 17
              ? (J(i, kb(a), 0), (i.a += ';'))
              : Va(i, kb(a))
            : (i.a += ';'),
          Ca(a) && ((i.a += i.d), J(i, Ca(a), 0)),
          (i.a += ';'),
          Gc(a) && ((i.a += i.d), J(i, Gc(a), 0)),
          (i.a += ')'),
          cc(i, a.i, 1);
        break;
      case 11:
        var c = a.e;
        (i.a += Za(c.e)),
          J(i, c.k, 0),
          (i.a += ' '),
          (i.a += c.c),
          (i.a += '(');
        for (var n = 0, k = c.n, p = k.length; n < p; n = (n + 1) | 0) {
          var d = k[n];
          d != c.n[0] && (i.a += ',' + i.d),
            (i.a += Za(d.e)),
            J(i, d.q, 0),
            (i.a += ' '),
            ad(i, d);
        }
        (i.a += ')'), c.p ? ((i.a += i.d), Va(i, c.p)) : (i.a += ';');
        break;
      case 12:
        (i.a += 'if' + i.d + '('),
          J(i, a.g, 0),
          (i.a += ')'),
          cc(i, a.g.k, 1),
          a.g.k.k &&
            ((i.a += i.c + i.b + 'else'),
            a.g.k.k.b ^ 12
              ? cc(i, a.g.k.k, 0)
              : ((i.a += ' '), Va(i, a.g.k.k)));
        break;
      case 14:
        (i.a += 'precision '), (i.a += Za(a.h | 0)), J(i, a.g, 0), (i.a += ';');
        break;
      case 15:
        var e = a.g;
        (i.a += 'return'),
          e && (Vf(e.b) || (i.a += ' '), J(i, e, 0)),
          (i.a += ';');
        break;
      case 16:
        var f = a.e;
        (i.a += Za(f.e)), (i.a += 'struct ' + f.c + i.d + '{' + i.c), _c(i);
        for (var h = a.g.g; h; h = h.k) (i.a += i.b), Va(i, h), (i.a += i.c);
        if (($c(i), (i.a += i.b + '}'), a.g.k))
          for (var m = a.g.k.g.k; m; m = m.k)
            (i.a += m.n.n ? ',' + i.d : i.d), ad(i, m.e);
        i.a += ';';
        break;
      case 17:
        (i.a += Za(a.h | 0)), J(i, a.g, 0);
        for (var l = a.g.k; l; l = l.k) {
          var g = l.e;
          (i.a += l.n.n ? ',' + i.d : ' '), ad(i, g);
        }
        i.a += ';';
        break;
      case 18:
        Qd(i), (i.a += '#version ' + (a.h | 0)), Rd(i);
        break;
      case 19:
        (i.a += 'while' + i.d + '('), J(i, a.g, 0), (i.a += ')'), cc(i, a.i, 1);
        break;
      default:
        i.a += Wg[a.b];
        break;
    }
  }
  function Qd(a) {
    a.a != '' && !a.a.endsWith('\n') && (a.a += '\n');
  }
  function Rd(a) {
    a.e && (a.a += '\n');
  }
  function cc(c, a, b) {
    a.b ^ 3
      ? ((c.a += c.e && !b ? ' ' : c.c), _c(c), (c.a += c.b), Va(c, a), $c(c))
      : ((c.a += c.d), Va(c, a));
  }
  function Sd(c, a) {
    for (var b = a; b; b = b.k) b != a && (c.a += ',' + c.d), J(c, b, 1);
  }
  function ad(b, a) {
    (b.a += a.c),
      a.F && ((b.a += '['), J(b, a.F, 0), (b.a += ']')),
      P(a) && ((b.a += b.d + '=' + b.d), J(b, P(a), 1));
  }
  function J(c, a, b) {
    switch (a.b) {
      case 20:
        J(c, a.g, 15), (c.a += '('), Sd(c, a.g.k), (c.a += ')');
        break;
      case 21:
        J(c, a.g, 16), (c.a += '.'), (c.a += a.e ? a.e.c : a.m);
        break;
      case 22:
        2 < b && (c.a += '('),
          J(c, a.g, 3),
          (c.a += c.d + '?' + c.d),
          J(c, a.g.k, 2),
          (c.a += c.d + ':' + c.d),
          J(c, a.i, 2),
          2 < b && (c.a += ')');
        break;
      case 23:
        c.a += a.e.c;
        break;
      case 25:
        0 < b && (c.a += '('), Sd(c, a.g), 0 < b && (c.a += ')');
        break;
      case 26:
        c.a += Ne(a.f).a.c;
        break;
      case 28:
        c.a += (!!a.h).toString();
        break;
      case 29:
        c.a += Pd(a.h, c.e ? 1 : 0);
        break;
      case 30:
        c.a += (a.h | 0).toString();
        break;
      case 43:
        J(c, a.g, 16), (c.a += '['), J(c, a.i, 0), (c.a += ']');
        break;
      case 31:
        dc(c, '-', a, b);
        break;
      case 32:
        dc(c, '!', a, b);
        break;
      case 33:
        dc(c, '+', a, b);
        break;
      case 34:
        dc(c, '--', a, b);
        break;
      case 35:
        dc(c, '++', a, b);
        break;
      case 36:
        Td(c, '--', a, b);
        break;
      case 37:
        Td(c, '++', a, b);
        break;
      case 38:
        V(c, '+', a, b, 12);
        break;
      case 39:
        V(c, '/', a, b, 13);
        break;
      case 40:
        V(c, '==', a, b, 10);
        break;
      case 41:
        V(c, '>', a, b, 10);
        break;
      case 42:
        V(c, '>=', a, b, 10);
        break;
      case 44:
        V(c, '<', a, b, 10);
        break;
      case 45:
        V(c, '<=', a, b, 10);
        break;
      case 46:
        V(c, '&&', a, b, 5);
        break;
      case 47:
        V(c, '||', a, b, 3);
        break;
      case 48:
        V(c, '^^', a, b, 4);
        break;
      case 49:
        V(c, '*', a, b, 13);
        break;
      case 50:
        V(c, '!=', a, b, 10);
        break;
      case 51:
        V(c, '-', a, b, 12);
        break;
      case 52:
        V(c, '=', a, b, 2);
        break;
      case 53:
        V(c, '+=', a, b, 2);
        break;
      case 54:
        V(c, '/=', a, b, 2);
        break;
      case 55:
        V(c, '*=', a, b, 2);
        break;
      case 56:
        V(c, '-=', a, b, 2);
        break;
      default:
        c.a += Wg[a.b];
        break;
    }
  }
  function dc(f, a, b, c) {
    var d = b.g,
      e = d.b;
    (f.a += a),
      ((a.charCodeAt(0) == 45 && (e == 31 || e == 34 || _f(d))) ||
        (a.charCodeAt(0) == 43 && (e == 33 || e == 35))) &&
        (f.a += ' '),
      J(f, d, 14);
  }
  function Td(d, a, b, c) {
    J(d, b.g, 15), (d.a += a);
  }
  function V(f, a, b, c, d) {
    var e = Dc(b.b);
    d < c && (f.a += '('),
      J(f, b.g, (d + (e | 0)) | 0),
      (f.a += f.d + a + f.d),
      J(f, b.i, (d + (!e | 0)) | 0),
      d < c && (f.a += ')');
  }
  function G(a) {
    if (a.f == L) return null;
    switch (a.b) {
      case 30:
      case 29:
      case 28:
        return Wa(a);
      case 23:
        return kf(a);
      case 25:
        return lf(a);
      case 22:
        return mf(a);
      case 21:
        return nf(a);
      case 43:
        return of(a);
      case 20:
        return pf(a);
      case 31:
        return Zd(
          a,
          function (b) {
            return -b;
          },
          function (c) {
            return -c | 0;
          }
        );
      case 32:
        return wf(a, function (d) {
          return !d;
        });
      case 33:
        return Zd(
          a,
          function (e) {
            return +e;
          },
          function (f) {
            return +f;
          }
        );
      case 38:
        return cd(
          a,
          function (h, m) {
            return h + m;
          },
          function (l, g) {
            return (l + g) | 0;
          }
        );
      case 51:
        return cd(
          a,
          function (i, n) {
            return i - n;
          },
          function (k, p) {
            return (k - p) | 0;
          }
        );
      case 49:
        return qf(a);
      case 39:
        return cd(
          a,
          function (t, w) {
            return w != 0 ? t / w : 0;
          },
          function (v, q) {
            return q ? (v / q) | 0 : 0;
          }
        );
      case 40:
      case 50:
        return tf(a);
      case 46:
        return bd(a, function (E, F) {
          return E && F;
        });
      case 47:
        return bd(a, function (I, O) {
          return I || O;
        });
      case 48:
        return bd(a, function (ha, M) {
          return ha != M;
        });
      case 41:
        return vc(a, function (ia, Z) {
          return ia > Z;
        });
      case 42:
        return vc(a, function (aa, ea) {
          return aa >= ea;
        });
      case 44:
        return vc(a, function (ua, ba) {
          return ua < ba;
        });
      case 45:
        return vc(a, function (ka, va) {
          return ka <= va;
        });
    }
    return null;
  }
  function kf(a) {
    var b = a.e;
    if (b && b.e & 2) {
      if (b.h) return Wa(b.h);
      if (b.v) return s(new Lh(27), a.f);
    }
    return null;
  }
  function lf(a) {
    for (var b = a.g; b; b = b.k) {
      var c = G(b);
      if (!c || b == a.i) return c;
    }
    return null;
  }
  function mf(a) {
    var b = G(a.g),
      c = G(a.g.k),
      d = G(a.i);
    return b && b.b == 28 && c && d ? (!b.h ? d : c) : null;
  }
  function nf(a) {
    var b = G(a.g);
    if (b && b.b == 20) {
      var c = b.f,
        d = a.m;
      if (Ed(c))
        for (
          var e = d.length, f = Ea(c), t = 0, w = zd(f), v = w.length;
          t < v;
          t = (t + 1) | 0
        ) {
          var h = w[t];
          if (~h.indexOf(d[0])) {
            if (e == 1) return r(gc(b, (1 + h.indexOf(d)) | 0));
            for (var m = Ad(da(c), e), l = sa(m), g = 0; g < e; g = (g + 1) | 0)
              o(l, Wa(gc(b, (1 + h.indexOf(d[g])) | 0)));
            return l;
          }
        }
      else if (c.a && c.a instanceof $b)
        for (
          var i = c.a, n = i.i, k = 0, q = n.length;
          k < q;
          k = (k + 1) | 0
        ) {
          var p = n[k];
          if (p.c == d) return r(gc(b, (1 + k) | 0));
        }
    }
    return null;
  }
  function of(a) {
    var b = G(a.g),
      c = G(a.i);
    if (b && b.b == 20 && c && c.b == 30) {
      var d = b.f;
      if (Ed(d)) {
        var e = Sa(d),
          f = c.h | 0;
        if (-1 < f && f < e) return r(gc(b, (f + 1) | 0));
      } else if (_a(d)) {
        var h = Sa(d),
          m = c.h | 0;
        if (-1 < m && m < h) {
          for (
            var l = Dd(d), g = sa(l), i = gc(b, sh(m, h)), n = 0;
            n < h;
            n = (n + 1) | 0
          )
            o(g, r(i.k));
          return g;
        }
      }
    }
    return null;
  }
  function pf(a) {
    var b = a.g;
    if (b.b ^ 26) return null;
    for (var c = b.f, d = da(c), e = 0, f = [], h = 0, m = b.k; m; m = m.k) {
      var l = G(m);
      if (!l) return null;
      if (l.b == 20 && d && da(l.g.f))
        for (var g = l.g.k; g; g = g.k) {
          var i = Ud(d, g);
          if (!i) return null;
          f.push(i);
        }
      else {
        if (d && ((l = Ud(d, l)), !l)) return null;
        f.push(l);
      }
      _a(l.f) && (e = Sa(l.f)), (h = (h + 1) | 0);
    }
    return _a(c) && e && h ^ 1
      ? null
      : da(c)
      ? rf(f, c, _a(c) ? e : 0)
      : c.a && c.a instanceof $b
      ? sf(f, c)
      : null;
  }
  function Fb(a) {
    for (var b = [], c = a.g.k; c; c = c.k) b.push(c.h);
    return b;
  }
  function qf(a) {
    var va,
      b = G(a.g),
      c = G(a.i),
      d = b && b.f,
      e = c && c.f;
    if (b && c) {
      if (
        (d == Fa && e == ob) ||
        (d == Ga && e == pb) ||
        (d == Ha && e == qb)
      ) {
        for (
          var f = Sa(d), h = sa(d), m = Fb(b), l = Fb(c), g = 0;
          g < f;
          g = (g + 1) | 0
        ) {
          for (var i = 0, n = 0; n < f; n = (n + 1) | 0)
            i += m[n] * l[(n + sh(g, f)) | 0];
          o(h, s(ma(new Lh(29), i), $));
        }
        return h;
      }
      if (
        (d == ob && e == Fa) ||
        (d == pb && e == Ga) ||
        (d == qb && e == Ha)
      ) {
        for (
          var k = Sa(d), p = sa(e), t = Fb(b), w = Fb(c), v = 0;
          v < k;
          v = (v + 1) | 0
        ) {
          for (var q = 0, E = 0; E < k; E = (E + 1) | 0)
            q += t[(v + sh(E, k)) | 0] * w[E];
          o(p, s(ma(new Lh(29), q), $));
        }
        return p;
      }
      if (_a(d) && e == d) {
        for (
          var F = Sa(d), I = sa(d), O = Fb(b), ha = Fb(c), M = 0;
          M < F;
          M = (M + 1) | 0
        )
          for (var ia = 0; ia < F; ia = (ia + 1) | 0) {
            for (var Z = 0, aa = 0; aa < F; aa = (aa + 1) | 0)
              Z += O[(ia + sh(aa, F)) | 0] * ha[(aa + sh(M, F)) | 0];
            o(I, s(ma(new Lh(29), Z), $));
          }
        return I;
      }
      return (
        (va = Xd(b, c, function (ea, ua) {
          return ea * ua;
        })) ||
        Yd(b, c, function (ba, ka) {
          return sh(ba, ka);
        })
      );
    }
    return null;
  }
  function Ud(a, b) {
    var c = 0;
    switch (b.b) {
      case 28:
        c = +!!b.h;
        break;
      case 30:
        c = b.h | 0;
        break;
      case 29:
        c = b.h;
        break;
      default:
        return null;
    }
    switch (a) {
      case Y:
        return s(Ba(new Lh(28), !!c), Y);
      case fa:
        return s(_(new Lh(30), c | 0), fa);
      case $:
        return s(ma(new Lh(29), c), $);
    }
    return null;
  }
  function rf(a, b, c) {
    var d = Ea(b),
      e = da(b),
      f = sa(b);
    if (a.length ^ 1) {
      if (c) {
        for (var n = Sa(b), k = 0; k < n; k = (k + 1) | 0)
          for (var p = 0; p < n; p = (p + 1) | 0)
            o(
              f,
              p < c && k < c
                ? a[(p + sh(k, c)) | 0]
                : s(ma(new Lh(29), p ^ k ? 0 : 1), $)
            );
      } else {
        if (a.length < d) return null;
        for (var t = 0; t < d; t = (t + 1) | 0) {
          var w = a[t];
          if (w.f != e) return null;
          o(f, w);
        }
      }
    } else {
      var h = a[0];
      if (h.f != e) return null;
      for (var m = _a(b), l = Sa(b), g = 0; g < d; g = (g + 1) | 0) {
        var i = m && (g % ((l + 1) | 0) | 0) != 0;
        o(f, i ? s(ma(new Lh(29), 0), $) : Wa(h));
      }
    }
    return Dd(b) ? f : r(f.i);
  }
  function sf(a, b) {
    var c = b.a.i,
      d = sa(b);
    if (a.length ^ c.length) return null;
    for (var e = 0, f = a.length; e < f; e = (e + 1) | 0) {
      if (a[e].f != c[e].q.f) return null;
      o(d, a[e]);
    }
    return d;
  }
  function tf(a) {
    var b = G(a.g),
      c = G(a.i);
    if (b && c) {
      var d = oa(b, c);
      return s(Ba(new Lh(28), a.b ^ 40 ? !d : d), Y);
    }
    return null;
  }
  function Vd(a, b, c, d) {
    if (a.b == 20 && a.g.b == 26 && da(a.g.f) == b) {
      for (var e = sa(a.g.f), f = a.g.k; f; f = f.k) {
        var h = G(f);
        if (!h || h.b ^ c) return null;
        o(e, d(h));
      }
      return e;
    }
    return null;
  }
  function uf(a, b) {
    return a.b ^ 29
      ? Vd(a, $, 29, function (c) {
          return s(ma(new Lh(29), b(c.h)), $);
        })
      : s(ma(new Lh(29), b(a.h)), $);
  }
  function vf(a, b) {
    return a.b ^ 30
      ? Vd(a, fa, 30, function (c) {
          return s(_(new Lh(30), b(c.h | 0)), fa);
        })
      : s(_(new Lh(30), b(a.h | 0)), fa);
  }
  function Wd(a, b, c, d, e) {
    var f = a.b == 20 && a.g.b == 26 && da(a.g.f) == c,
      h = b.b == 20 && b.g.b == 26 && da(b.g.f) == c;
    if (f && h && b.f == a.f) {
      for (var m = sa(a.f), l = a.g.k, g = b.g.k; l && g; ) {
        var i = G(l),
          n = G(g);
        if (!i || i.b ^ d || !n || n.b ^ d) return null;
        o(m, e(i, n)), (l = l.k), (g = g.k);
      }
      if (!l && !g) return m;
    } else if (f && b.b == d) {
      for (var k = sa(a.f), p = a.g.k; p; p = p.k) {
        var t = G(p);
        if (!t || t.b ^ d) return null;
        o(k, e(t, b));
      }
      return k;
    } else if (a.b == d && h) {
      for (var w = sa(b.f), v = b.g.k; v; v = v.k) {
        var q = G(v);
        if (!q || q.b ^ d) return null;
        o(w, e(a, q));
      }
      return w;
    }
    return null;
  }
  function Xd(a, b, c) {
    return a.b == 29 && b.b == 29
      ? s(ma(new Lh(29), c(a.h, b.h)), $)
      : Wd(a, b, $, 29, function (d, e) {
          return s(ma(new Lh(29), c(d.h, e.h)), $);
        });
  }
  function Yd(a, b, c) {
    return a.b == 30 && b.b == 30
      ? s(_(new Lh(30), c(a.h | 0, b.h | 0)), fa)
      : Wd(a, b, fa, 30, function (d, e) {
          return s(_(new Lh(30), c(d.h | 0, e.h | 0)), fa);
        });
  }
  function wf(a, b) {
    var c = G(a.g);
    return c && c.b == 28 ? s(Ba(new Lh(28), b(!!c.h)), Y) : null;
  }
  function Zd(a, b, c) {
    var e,
      d = G(a.g);
    return d && ((e = uf(d, b)) || vf(d, c));
  }
  function bd(a, b) {
    var c = G(a.g),
      d = G(a.i);
    return c && d && c.b == 28 && d.b == 28
      ? s(Ba(new Lh(28), b(!!c.h, !!d.h)), Y)
      : null;
  }
  function cd(a, b, c) {
    var f,
      d = G(a.g),
      e = G(a.i);
    return d && e ? (f = Xd(d, e, b)) || Yd(d, e, c) : null;
  }
  function vc(a, b) {
    var c = G(a.g),
      d = G(a.i);
    if (c && d) {
      if (c.b == 29 && d.b == 29) return s(Ba(new Lh(28), b(c.h, d.h)), Y);
      if (c.b == 30 && d.b == 30)
        return s(Ba(new Lh(28), b(c.h | 0, d.h | 0)), Y);
    }
    return null;
  }
  function _d(a, b, c) {
    for (var d = 0, e = 0, f = a.length; e < f; ) {
      var h = a.charCodeAt(e);
      (e = (e + 1) | 0),
        wc(h) &&
          ((d = (d + 1) | 0),
          h == 13 && e < f && a.charCodeAt(e) == 10 && (e = (e + 1) | 0));
    }
    return d > 2 && (d = 2), bc(c, d);
  }
  function xf(a, b, c) {
    switch (c) {
      case 48:
        switch (b) {
          case 65:
            return !0;
          case 96:
            return !1;
        }
        break;
      case 47:
        switch (b) {
          case 62:
            return !0;
          case 96:
            return !1;
        }
        break;
      case 65:
        if (b == 65) return !0;
        break;
      case 62:
        if (b == 62) return !0;
        break;
      case 85:
        if (Cd(b) || b == 88) return !1;
        break;
      case 84:
        if (Cd(b) || b == 88) return !1;
        break;
      case 81:
      case 90:
      case 89:
      case 88:
      case 82:
        return !1;
      case 87:
        if (b == 83) return !1;
        break;
    }
    switch (b) {
      case 85:
      case 84:
      case 82:
      case 49:
      case 46:
        return !1;
      case 65:
      case 62:
        switch (a) {
          case 99:
          case 85:
          case 84:
          case 81:
          case 80:
          case 90:
          case 49:
          case 46:
          case 32:
          case 12:
            return !1;
        }
        if (Jg(a)) return !1;
        break;
      case 48:
      case 47:
        if (c == 96) return !1;
        break;
    }
    return !0;
  }
  function wc(a) {
    return a == 10 || a == 13;
  }
  function yf(a) {
    for (var b = 0, c = a.length; b < c; b = (b + 1) | 0)
      if (wc(a.charCodeAt(b))) return !0;
    return !1;
  }
  function $d(a) {
    return a == 32 || a == 9;
  }
  function xc(a) {
    for (var b = 0, c = a.length; b < c; b = (b + 1) | 0)
      if (!$d(a.charCodeAt(b))) return !1;
    return !0;
  }
  function zf(a) {
    for (var b = a.length; $d(a.charCodeAt((b - 1) | 0)); ) b = (b - 1) | 0;
    return a.slice(0, b);
  }
  function Af(a, b, c, d) {
    for (var e = [], f = 0, h = 0, m = a.length; h < m; h = (h + 1) | 0) {
      var l = a.charCodeAt(h);
      wc(l) &&
        (e.push(a.slice(f, h)),
        l == 13 &&
          ((h + 1) | 0) < m &&
          a.charCodeAt((h + 1) | 0) == 10 &&
          (h = (h + 1) | 0),
        (f = (h + 1) | 0));
    }
    e.push(a.slice(f));
    for (var g = b.length; g > 0 && !wc(b.charCodeAt((g - 1) | 0)); )
      g = (g - 1) | 0;
    for (
      var i = b.slice(g), n = i, q = 0, E = e.slice(1), F = E.length;
      q < F;
      q = (q + 1) | 0
    ) {
      var k = E[q];
      if (!xc(k)) {
        for (
          var p = 0, t = k.length;
          p < t && p < n.length && k.charCodeAt(p) == n.charCodeAt(p);

        )
          p = (p + 1) | 0;
        n = n.slice(0, p);
      }
    }
    for (var w = '', I = 0, O = e.length; I < O; I = (I + 1) | 0) {
      var v = e[I];
      w == ''
        ? (xc(i) && (w += i.slice(n.length)), (w += v))
        : ((w += d), xc(v) || (w += c + v.slice(n.length)));
    }
    return w;
  }
  function Bf(a, b, c, d) {
    var e = new Kh(),
      f = new Zh('<stdin>', a),
      h = Lc(e, f, 1);
    if (e.d) return a;
    var m = '',
      l = 99,
      g = 99,
      i = 0,
      n = 0,
      k = !0,
      p = 0,
      t = null,
      w = function (v) {
        return !xc(a.slice(h[(v - 1) | 0].a.c, h[v].a.b));
      },
      q = function (E, F) {
        switch (E) {
          case 90:
          case 87:
            return !0;
          case 4:
          case 9:
          case 10:
          case 11:
          case 12:
          case 15:
          case 17:
          case 32:
          case 43:
            return !F;
        }
        return !1;
      },
      I = null,
      O = function () {
        for (var ha = 1, M = p; M < h.length; M = (M + 1) | 0) {
          switch (h[M].b) {
            case 0:
            case 1:
              continue;
            case 83:
              ha = 0;
              break;
          }
          break;
        }
        (n = (n + ha) | 0), I(), (n = (n - ha) | 0);
      },
      ia = function () {
        var Z = 1;
        return (
          h[p].b == 85 && w((p + 1) | 0) && (Z = 0),
          (n = (n + Z) | 0),
          t(function (aa) {
            return aa == 85;
          })
            ? ((n = (n - Z) | 0), !0)
            : ((n = (n - Z) | 0), !1)
        );
      };
    I = function () {
      for (
        ;
        t(function (ea) {
          return ea == 0 || ea == 1;
        });

      );
      switch (h[p].b) {
        case 99:
        case 87:
          return !1;
        case 45:
        case 44:
          t(function (ua) {
            return !0;
          });
          break;
        case 17:
          t(function (ba) {
            return !0;
          }),
            ia() && O(),
            h[p].b ^ 12 || I();
          break;
        case 15:
        case 43:
          t(function (ka) {
            return !0;
          }),
            ia() && O();
          break;
        case 11:
          t(function (va) {
            return !0;
          }),
            O(),
            t(function (Ta) {
              return Ta == 43;
            }) &&
              (ia(),
              t(function (la) {
                return la == 90;
              }));
          break;
        case 12:
          if (
            (t(function (rb) {
              return !0;
            }),
            h[p].b ^ 17)
          )
            O();
          else {
            var La = w(p);
            La && (n = (n + 1) | 0),
              t(function (Ua) {
                return !0;
              }),
              ia() && O(),
              La && (n = (n - 1) | 0);
          }
          break;
        case 83:
        case 90:
          t(function (wa) {
            return !0;
          });
          break;
        case 91:
        case 92:
        case 93:
        case 94:
          for (
            t(function (xa) {
              return !0;
            });
            t(function (bb) {
              return !w(p);
            });

          );
          break;
        default:
          var Ia = Cd(h[p].b);
          if (
            (t(function (Ja) {
              return !0;
            }),
            Ia &&
              t(function (cb) {
                return cb == 96;
              }) &&
              t(function (sb) {
                return sb == 85;
              }))
          )
            t(function (tb) {
              return tb == 83;
            }) ||
              t(function (Ub) {
                return Ub == 90;
              });
          else {
            for (
              var ub = !1;
              !ub && w(p) && ((ub = !0), (n = (n + 1) | 0)),
                t(function (nc) {
                  return !q(nc, !1);
                });

            );
            t(function ($a) {
              return $a == 90;
            }),
              ub && (n = (n - 1) | 0);
          }
          break;
      }
      return !0;
    };
    var Pc = function () {
        for (var db = [], eb = p; eb < h.length; ) {
          var vb = h[eb].b;
          switch (vb) {
            case 83:
            case 84:
            case 85:
              db.push(vb);
              break;
            case 87:
              if (!db.length) return eb;
              if (db.pop() ^ 83) return -1;
              break;
            case 88:
              if (!db.length || db.pop() ^ 84) return -1;
              break;
            case 89:
              if (!db.length || db.pop() ^ 85) return -1;
              break;
          }
          eb = (eb + 1) | 0;
        }
        return -1;
      },
      wb = -1,
      Vb = function () {
        var Bb = Pc(),
          Wb = Bb != -1 && yf(a.slice(h[(p - 1) | 0].a.c, h[Bb].a.b));
        for (Wb && (wb = p), n = (n + 1) | 0; I(); );
        (n = (n - 1) | 0),
          Wb && (wb = p),
          t(function (Cb) {
            return Cb == 87;
          });
      },
      fb = function () {
        for (
          n = (n + 1) | 0;
          t(function (Sc) {
            return Sc != 89;
          });

        );
        (n = (n - 1) | 0),
          t(function (Qc) {
            return Qc == 89;
          });
      },
      Tc = function () {
        for (
          n = (n + 1) | 0;
          t(function (Rc) {
            return Rc != 88;
          });

        );
        (n = (n - 1) | 0),
          t(function (sc) {
            return sc == 88;
          });
      };
    for (
      t = function (oc) {
        var Ka = h[p];
        if (!oc(Ka.b) || Ka.b == 99) return !1;
        var gb = wb ^ p ? (g ^ 99 ? _d(a.slice(i, Ka.a.b), b, c) : '') : '\n';
        (p = (p + 1) | 0),
          (m += gb),
          gb != '' && (k = !0),
          k ? (m += bc(b, n)) : xf(l, g, Ka.b) && (m += ' ');
        var Ma = N(Ka.a);
        switch (Ka.b) {
          case 0:
            Ma = zf(Ma);
            break;
          case 1:
            Ma = Af(Ma, a.slice(0, Ka.a.b), bc(b, n), c);
            break;
        }
        (m += Ma), (l = g), (g = Ka.b), (i = Ka.a.c), (k = !1);
        switch (Ka.b) {
          case 83:
            Vb();
            break;
          case 85:
            fb();
            break;
          case 84:
            Tc();
            break;
        }
        return !0;
      };
      I() ||
      t(function (Xb) {
        return Xb != 99;
      });

    );
    var Yb = _d(a.slice(i), b, c);
    switch (d) {
      case 0:
        Yb != '' && (m += c);
        break;
      case 2:
        m != '' && (m += c);
        break;
    }
    return m;
  }
  function Cf(a) {
    return a.f != null
      ? new Bh(C(a.h) + ' ' + a.f + ';', '')
      : a.d && new Bh(yc(a.d), zc(a.d.f));
  }
  function Ac(b, a) {
    return a.a == b.a && lc(a, b.b);
  }
  function dd(b, a) {
    return Ac(b, a.b) ? ((b.c = K(a)), (b.d = a), (b.e = a.b), !0) : !1;
  }
  function ed(b, a) {
    return dd(b, a) || Pa(b, a.q) || Pa(b, a.F) || Pa(b, P(a));
  }
  function Df(c, a) {
    for (var d = 0, e = a.n, f = e.length; d < f; d = (d + 1) | 0) {
      var b = e[d];
      if (ed(c, b)) return !0;
    }
    return dd(c, a) || Pa(c, a.k) || Pa(c, a.p);
  }
  function Ef(c, a) {
    for (var d = 0, e = a.i, f = e.length; d < f; d = (d + 1) | 0) {
      var b = e[d];
      if (ed(c, b)) return !0;
    }
    return dd(c, a);
  }
  function Pa(c, a) {
    var d;
    if (!a) return !1;
    for (var b = a.g; b; b = b.k) if (Pa(c, b)) return !0;
    switch (a.b) {
      case 23:
        if (Ac(c, a.c)) return (c.c = a.f), (c.d = a.e), (c.e = a.c), !0;
        break;
      case 26:
        if (Ac(c, a.c))
          return (
            (c.c = a.f), (c.d = ((d = c.c).b ? d.b : c.c).a), (c.e = a.c), !0
          );
        break;
      case 21:
        if (Ac(c, a.d))
          return (
            (c.c = a.f),
            Ed(a.g.f) ? ((c.f = a.m), (c.h = a.f)) : (c.d = a.e),
            (c.e = a.d),
            !0
          );
        break;
      case 2:
        return ed(c, a.e);
      case 11:
        return Df(c, a.e);
      case 16:
        return Ef(c, a.e);
    }
    return !1;
  }
  function be(d, a) {
    switch (a.b) {
      case 16:
      case 11:
        ce(d, a.e);
        break;
      case 17:
        for (var b = a.g.k; b; b = b.k) ce(d, b.e);
        break;
      case 0:
        for (var c = a.g; c; c = c.k) be(d, c);
        break;
    }
  }
  function ce(b, a) {
    a.b && a.b.a == b.a && b.b.push(a);
  }
  function Ff(m, a) {
    var b = new Ch(m.a, m.b);
    if ((Pa(b, a), (m.d = b.d), m.d)) {
      jb(m, a);
      var c = null;
      m.c.sort(function (d, e) {
        return d.a == e.a ? Xc(d.b, e.b) : af(d.a.a, e.a.a);
      }),
        Eb(m.c, function (f) {
          var h = c;
          return (c = f), h != null && pg(c, h);
        });
    }
  }
  function ib(c, a, b) {
    b == c.d && a && N(a) == c.d.c && c.c.push(a);
  }
  function fd(b, a) {
    ib(b, a.b, a), jb(b, a.q), jb(b, a.F), jb(b, P(a));
  }
  function Gf(c, a) {
    ib(c, a.b, a), ib(c, a.b, a.w), jb(c, a.k), jb(c, a.p);
    for (var d = 0, e = a.n, f = e.length; d < f; d = (d + 1) | 0) {
      var b = e[d];
      fd(c, b);
    }
  }
  function Hf(c, a) {
    ib(c, a.b, a);
    for (var d = 0, e = a.i, f = e.length; d < f; d = (d + 1) | 0) {
      var b = e[d];
      fd(c, b);
    }
  }
  function jb(c, a) {
    if (a) {
      for (var b = a.g; b; b = b.k) jb(c, b);
      switch (a.b) {
        case 23:
          ib(c, a.c, a.e);
          break;
        case 21:
          ib(c, a.d, a.e);
          break;
        case 26:
          ib(c, a.c, a.f.a);
          break;
        case 2:
          fd(c, a.e);
          break;
        case 11:
          Gf(c, a.e);
          break;
        case 16:
          Hf(c, a.e);
          break;
      }
    }
  }
  function If(c, a) {
    Aa(c, 'keyword', 'false'),
      Aa(c, 'keyword', 'true'),
      Aa(c, 'keyword', 'void');
    for (var d = 0, e = Rg.length; d < e; d = (d + 1) | 0) {
      var b = Rg[d];
      Aa(c, 'struct', b.a.c).c = yc(b.a);
    }
    gd(c, a, !0);
  }
  function de(b, a) {
    return a != null && a.a == b.a && lc(a, b.b);
  }
  function Aa(d, a, b) {
    var c = null;
    return (
      d.c.has(b)
        ? (c = d.c.get(b))
        : ((c = new Fh(a, b)), d.d.push(c), Na(d.c, b, c)),
      c
    );
  }
  function fc(d, a) {
    var b =
        a instanceof mc ? 'function' : a instanceof $b ? 'struct' : 'variable',
      c = Aa(d, b, a.c);
    c.c != '' ? (c.c += '\n') : (c.d = zc(a.f)), (c.c += yc(a));
  }
  function gd(E, a, b) {
    if (!a) return !1;
    var c = de(E, a.c);
    switch (a.b) {
      case 11:
        if ((fc(E, a.e), c)) {
          var d = a.e;
          Aa(E, 'keyword', 'discard'), Aa(E, 'keyword', 'return');
          for (var F = 0, I = d.n, O = I.length; F < O; F = (F + 1) | 0) {
            var e = I[F];
            fc(E, e);
          }
          gd(E, d.p, !1);
        }
        break;
      case 2:
        fc(E, a.e);
        break;
      case 16:
        fc(E, a.e);
        break;
      case 10:
      case 19:
      case 7:
        c && (Aa(E, 'keyword', 'break'), Aa(E, 'keyword', 'continue'));
        break;
      case 21:
        var f = a.g;
        if (c && !de(E, f.c)) {
          E.d = [];
          var h = f.f;
          switch (h) {
            case Rb:
            case yb:
            case Fa:
            case Sb:
            case zb:
            case Ga:
            case Tb:
            case Ab:
            case Ha:
              for (
                var ha = 0, M = zd(Ea(h)), ia = M.length;
                ha < ia;
                ha = (ha + 1) | 0
              )
                for (var m = M[ha], l = 1; l < 5; l = (l + 1) | 0) {
                  for (var g = [], i = 0; i < l; i = (i + 1) | 0) g.push(0);
                  for (;;) {
                    for (var n = '', k = 0; k < l; k = (k + 1) | 0)
                      n += m[g[k]];
                    var p = Ad(da(h), n.length).a;
                    Aa(E, 'variable', n).c = p.c + ' ' + n + ';';
                    for (var t = 0; t < l; ) {
                      var w = g[t];
                      if (
                        ((w = (w + 1) | 0) ^ m.length || (w = 0), (g[t] = w), w)
                      )
                        break;
                      t = (t + 1) | 0;
                    }
                    if (t == l) break;
                  }
                }
              break;
            default:
              if (h.a && h.a instanceof $b)
                for (
                  var Z = 0, aa = h.a.i, ea = aa.length;
                  Z < ea;
                  Z = (Z + 1) | 0
                ) {
                  var v = aa[Z];
                  fc(E, v);
                }
              break;
          }
          return !0;
        }
        break;
    }
    if (b || c || a.b == 17)
      for (var q = a.g; q; q = q.k) if (gd(E, q, !1)) return !0;
    return c;
  }
  function ee(b, a) {
    return a != null && a.a == b.a && lc(a, b.b);
  }
  function hd(la, a) {
    if (!a || (a.b && !ee(la, a.c))) return !1;
    for (var b = a.g; b; b = b.k) if (hd(la, b)) return !0;
    switch (a.b) {
      case 11:
        return hd(la, a.e.p), !0;
      case 20:
        var c = a.g;
        if (!ee(la, c.c)) {
          for (var d = c.k, e = c.f, f = e.a, h = [], m = d; m; m = m.k)
            h.push(m);
          if (f instanceof mc) {
            for (var l = [], g = f; g; g = g.t) ~l.indexOf(g.w) || l.push(g);
            l.reverse();
            for (var rb = 0, La = l.length; rb < La; rb = (rb + 1) | 0) {
              var i = l[rb];
              la.c.push(
                new Hh(
                  yc(i),
                  i.n.map(function (n) {
                    return ec(n);
                  }),
                  zc(i.f)
                )
              );
            }
            if (la.c.length) {
              la.e = 0;
              for (var k = [], p = 0; p < l.length; p = (p + 1) | 0) k.push(p);
              for (var t = h.length; t > 0; t = (t - 1) | 0) {
                for (
                  var w = [], Ua = 0, wa = k, xa = wa.length;
                  Ua < xa;
                  Ua = (Ua + 1) | 0
                ) {
                  var v = wa[Ua];
                  l[v].n.length >= t && w.push(v);
                }
                if (w.length) {
                  k = w;
                  break;
                }
              }
              if (k.length > 1) {
                var q = k.slice();
                Eb(q, function (E) {
                  for (
                    var F = l[E].n, I = 0, bb = Math.min(F.length, h.length);
                    I < bb;
                    I = (I + 1) | 0
                  ) {
                    var O = F[I].q.f,
                      ha = h[I].f;
                    if (ha != L && O != ha) return !0;
                  }
                  return !1;
                }),
                  q.length ||
                    ((q = k.slice()),
                    Eb(q, function (M) {
                      for (
                        var ia = l[M].n,
                          Z = 0,
                          Ia = Math.min(ia.length, h.length);
                        Z < Ia;
                        Z = (Z + 1) | 0
                      ) {
                        var aa = ia[Z].q.f,
                          ea = h[Z].f,
                          ua = Ea(aa),
                          ba = Ea(ea);
                        if (ea != L && aa != ea && (!ua || !ba || ua ^ ba))
                          return !0;
                      }
                      return !1;
                    })),
                  q.length && (k = q);
              }
              k.length && (la.e = k[0]);
            }
          }
          if (f instanceof $b && !da(e)) {
            var ka = f.i.map(function (va) {
              return ec(va);
            });
            la.c.push(new Hh(f.c + '(' + ka.join(', ') + ');', ka, zc(f.f))),
              (la.e = 0);
          }
          if (h.length) {
            la.d = 0;
            for (var Ja = 0, cb = h.length; Ja < cb; Ja = (Ja + 1) | 0) {
              var Ta = h[Ja];
              if (la.b <= Ta.c.c || !Ta.k) break;
              la.d = (la.d + 1) | 0;
            }
          }
          return !0;
        }
        break;
    }
    return !1;
  }
  function ae(a) {
    switch (a.b) {
      case 30:
        return (a.h | 0).toString();
      case 28:
        return (!!a.h).toString();
      case 29:
        return Pd(a.h, 0);
      case 20:
        for (var b = a.g, c = C(a.f) + '(', d = b.k; d; d = d.k)
          d.n != b && (c += ', '), (c += ae(d));
        return c + ')';
    }
    return null;
  }
  function yc(a) {
    if (a instanceof $b) {
      var b = a,
        c = Za(b.e) + 'struct ' + a.c;
      if (b.a > -1) {
        c += ' {\n';
        for (var i = 0, n = b.i, k = n.length; i < k; i = (i + 1) | 0) {
          var d = n[i];
          c += '  ' + ec(d) + ';\n';
        }
        c += '}';
      }
      return c + ';';
    }
    if (a instanceof Me) {
      var e = a,
        f = ec(e);
      if (e.h) {
        var h = ae(e.h);
        h != null && (f += ' = ' + h);
      }
      return f + ';';
    }
    if (a instanceof mc) {
      for (
        var m = a,
          l = Za(m.e) + C(m.k.f) + ' ' + a.c + '(',
          p = 0,
          t = m.n,
          w = t.length;
        p < w;
        p = (p + 1) | 0
      ) {
        var g = t[p];
        g != m.n[0] && (l += ', '), (l += ec(g));
      }
      return l + ');';
    }
    return null;
  }
  function ec(a) {
    var b = a.q.f,
      c = Za(a.e) + C(b.b || b) + ' ' + a.c;
    return b.b && (c += b.c ? '[' + b.c + ']' : '[]'), c;
  }
  function zc(a) {
    var b = '';
    if (a)
      for (var f = 0, h = a.length; f < h; f = (f + 1) | 0) {
        var c = a[f],
          d = 0,
          e = c.length;
        for (
          c.startsWith('//')
            ? (d = (d + 2) | 0)
            : c.startsWith('/*') && ((d = (d + 2) | 0), (e = (e - 2) | 0));
          d < e && c.charCodeAt(d) == 32;

        )
          d = (d + 1) | 0;
        for (; e > d && c.charCodeAt((e - 1) | 0) == 32; ) e = (e - 1) | 0;
        b != '' && (b += '\n'), (b += c.slice(d, e));
      }
    return b;
  }
  function fe(a, b, c) {
    if (!b) return a + ': ' + c + '\n';
    var d = sd(b, 0);
    return rd(b) + ': ' + a + ': ' + c + '\n' + d.a + '\n' + d.b + '\n';
  }
  function Jf(c) {
    for (
      var a = new ph(), d = 0, e = c.a, f = e.length;
      d < f;
      d = (d + 1) | 0
    ) {
      var b = e[d];
      (a.a += fe(b.a ? 'warning' : 'error', b.b, b.c)),
        b.d && (a.a += fe('note', b.d, b.e));
    }
    return a.a;
  }
  function u(c, a, b) {
    (!c.e || c.e.b ^ a.b) &&
      ((c.e = a), c.a.push(new Jh(0, a, b)), (c.d = (c.d + 1) | 0));
  }
  function Kf(c, a, b) {
    c.a.push(new Jh(1, a, b)), (c.c = (c.c + 1) | 0);
  }
  function Bc(d, a, b) {
    var c = Yc(d.a);
    (c.d = a), (c.e = b);
  }
  function Lf(b, a) {
    u(b, a, '"' + N(a) + '" is a reserved word');
  }
  function Mf(b, a) {
    u(b, a.a, 'Unexpected ' + Ue[a.b]);
  }
  function Nf(b, a) {
    u(b, a, 'There is no symbol called "' + N(a) + '" in the current scope');
  }
  function id(c, a, b) {
    u(
      c,
      a,
      'There is already a symbol called "' + N(a) + '" in the current scope'
    ),
      Bc(c, b, 'The previous definition of "' + N(b) + '" is here');
  }
  function Of(f, a, b, c, d, e) {
    u(
      f,
      a,
      'Cannot change the return type of "' + b + '" to type "' + C(c) + '"'
    ),
      Bc(
        f,
        e,
        'The forward declaration of "' +
          b +
          '" has a return type of "' +
          C(d) +
          '"'
      );
  }
  function ge(b, a) {
    u(b, a, 'The operator "' + N(a) + '" is reserved and cannot be used');
  }
  function Pf(e, a, b, c, d) {
    u(
      e,
      a,
      'The constructor for type "' +
        C(b) +
        '" only takes ' +
        c +
        ' argument' +
        (c ^ 1 ? 's' : '') +
        ' and this argument would bring the total to ' +
        d
    );
  }
  function Qf(d, a, b, c) {
    u(
      d,
      a,
      'Cannot construct type "' +
        C(b) +
        '" with ' +
        c +
        ' argument' +
        (c ^ 1 ? 's' : '')
    );
  }
  function Rf(f, a, b, c, d, e) {
    u(
      f,
      a,
      'Expected ' +
        b +
        ' argument' +
        (b ^ 1 ? 's' : '') +
        ' but found ' +
        c +
        ' argument' +
        (c ^ 1 ? 's' : '') +
        ' when calling function "' +
        d +
        '"'
    ),
      e && Bc(f, e, 'The definition of function "' + d + '" is here');
  }
  function Sf(f, a, b, c, d, e) {
    u(
      f,
      a,
      'Expected ' +
        b +
        ' argument' +
        (b ^ 1 ? 's' : '') +
        ' but found ' +
        c +
        ' argument' +
        (c ^ 1 ? 's' : '') +
        ' when constructing type "' +
        d +
        '"'
    ),
      e && Bc(f, e, 'The definition of struct "' + d + '" is here');
  }
  function Tf(c, a, b) {
    b.b
      ? u(
          c,
          a,
          'Cannot use a conditional expression with array type "' + C(b) + '"'
        )
      : u(
          c,
          a,
          'Cannot use a conditional expression with type "' +
            C(b) +
            '" because it contains an array'
        );
  }
  function he(c, a, b) {
    b.b
      ? u(c, a, 'Cannot assign to array type "' + C(b) + '"')
      : u(
          c,
          a,
          'Cannot assign to type "' + C(b) + '" because it contains an array'
        );
  }
  function Uf(e, a, b, c, d) {
    c == d
      ? u(
          e,
          a,
          'There is no operator "' + b + '" defined for type "' + C(c) + '"'
        )
      : u(
          e,
          a,
          'No binary operator "' +
            b +
            '" for type "' +
            C(c) +
            '" and type "' +
            C(d) +
            '"'
        );
  }
  function je(b, a) {
    (b.b = a.b),
      (b.c = a.c),
      (b.d = a.d),
      (b.e = a.e),
      (b.f = a.f),
      (b.h = a.h),
      (b.m = a.m);
  }
  function ke(b) {
    var a = new Lh(b.b);
    return je(a, b), a;
  }
  function md(b) {
    for (var a = ke(b); b.g; ) o(a, r(b.g));
    return a;
  }
  function Wa(c) {
    for (var a = ke(c), b = c.g; b; b = b.k) o(a, Wa(b));
    return a;
  }
  function H(b, a) {
    a != b && (je(b, a), Yf(b), Xf(b, a));
  }
  function le(a) {
    return a.g != null && a.g == a.i;
  }
  function gc(c, a) {
    for (var b = c.g; a; ) (b = b.k), (a = (a - 1) | 0);
    return b;
  }
  function s(b, a) {
    return (b.f = a), b;
  }
  function Ec(b, a) {
    return (b.e = a), b;
  }
  function Ba(b, a) {
    return (b.h = +a), b;
  }
  function _(b, a) {
    return (b.h = a), b;
  }
  function ma(b, a) {
    return (b.h = a), b;
  }
  function hc(b, a) {
    return (b.m = a), b;
  }
  function x(b, a) {
    return (b.c = a), b;
  }
  function Qa(b, a) {
    return (b.d = a), b;
  }
  function o(b, a) {
    return a
      ? ((a.l = b),
        b.g ? ((a.n = b.i), (b.i.k = a), (b.i = a)) : (b.i = b.g = a),
        b)
      : b;
  }
  function Xf(b, a) {
    for (; a.g; ) o(b, r(a.g));
    return b;
  }
  function r(a) {
    return (
      a.n ? (a.n.k = a.k) : (a.l.g = a.k),
      a.k ? (a.k.n = a.n) : (a.l.i = a.n),
      (a.l = null),
      (a.n = null),
      (a.k = null),
      a
    );
  }
  function Yf(a) {
    for (; a.g; ) r(a.g);
  }
  function ga(b, a) {
    return (
      (a.l = b.l),
      (a.n = b.n),
      (a.k = b.k),
      b.n ? (b.n.k = a) : (b.l.g = a),
      b.k ? (b.k.n = a) : (b.l.i = a),
      (b.l = null),
      (b.n = null),
      (b.k = null),
      b
    );
  }
  function Fc(c, a, b) {
    return b
      ? a
        ? ((b.l = c),
          (b.n = a.n),
          (b.k = a),
          a.n ? (a.n.k = b) : (c.g = b),
          (a.n = b),
          c)
        : o(c, b)
      : c;
  }
  function me(a) {
    for (; a.g; ) Fc(a.l, a.k, r(a.i));
    r(a);
  }
  function Ra(a) {
    return a.b == 28 && !!a.h;
  }
  function Gb(a) {
    return a.b == 28 && !!!a.h;
  }
  function ic(b, a) {
    return (b.b == 30 && (b.h | 0) == a) || (b.b == 29 && b.h == a);
  }
  function Zf(a) {
    return a.l != null && a.l.b == 20 && a.l.g == a;
  }
  function ne(f) {
    if (f.l) {
      if (ld(f.l.b) || (Dc(f.l.b) && f.l.g == f)) return !0;
      if (f.l.b == 20 && f.l.f != L) {
        var a = f.l.g,
          b = a.e;
        if (b && b instanceof mc)
          for (var c = b, d = 0, e = a.k; e; e = e.k) {
            if (e == f) return (c.n[d].e & 16) != 0;
            d = (d + 1) | 0;
          }
      }
    }
    return !1;
  }
  function oe(a) {
    return ne(a) ? !0 : a.l && (a.l.b == 21 || a.l.b == 43) ? oe(a.l) : !1;
  }
  function pe(a) {
    return a.b == 3 && a.g == null;
  }
  function nd(a) {
    return a.b == 25 && a.g == null;
  }
  function _f(a) {
    return (a.b == 30 && (a.h | 0) < 0) || (a.b == 29 && a.h < 0);
  }
  function na(a) {
    switch (a.b) {
      case 28:
      case 29:
      case 30:
      case 23:
        return !0;
      case 22:
        return na(a.g) && na(a.g.k) && na(a.i);
      case 21:
        return na(a.g);
    }
    return kd(a.b)
      ? !ld(a.b) && na(a.g)
      : Cc(a.b)
      ? !Dc(a.b) && na(a.g) && na(a.i)
      : !1;
  }
  function Hb(a) {
    switch (a.b) {
      case 28:
        Ba(a, !!!a.h);
        break;
      case 32:
        H(a, r(a.g));
        break;
      case 40:
        a.b = 50;
        break;
      case 50:
        a.b = 40;
        break;
      case 44:
        a.b = 42;
        break;
      case 41:
        a.b = 45;
        break;
      case 45:
        a.b = 41;
        break;
      case 42:
        a.b = 44;
        break;
      case 25:
        Hb(a.i);
        break;
      case 47:
        (a.b = 46), Hb(a.g), Hb(a.i);
        break;
      case 46:
        (a.b = 47), Hb(a.g), Hb(a.i);
        break;
      default:
        H(a, s(o(new Lh(32), md(a)), Y));
        break;
    }
  }
  function oa(d, a) {
    if (d.b == a.b) {
      switch (d.b) {
        case 28:
          return !!d.h == !!a.h;
        case 29:
          return d.h == a.h;
        case 30:
          return (d.h | 0) == (a.h | 0);
        case 23:
          return d.e == a.e;
        case 26:
          return d.f == a.f;
        case 21:
          return oa(d.g, a.g) && d.e == a.e && d.m == a.m;
        case 22:
          return oa(d.g, a.g) && oa(d.g.k, a.g.k) && oa(d.i, a.i);
        case 20:
          for (var b = d.g, c = a.g; b && c; ) {
            if (!oa(b, c)) return !1;
            (b = b.k), (c = c.k);
          }
          return b == null && c == null;
      }
      if (kd(d.b)) return oa(d.g, a.g);
      if (Cc(d.b)) return oa(d.g, a.g) && oa(d.i, a.i);
    }
    return !1;
  }
  function qe(a, b, c, d) {
    return o(
      o(o(o(new Lh(10), a || new Lh(25)), b || new Lh(25)), c || new Lh(25)),
      d
    );
  }
  function sa(a) {
    return s(o(new Lh(20), s(new Lh(26), a)), a);
  }
  function kb(a) {
    return nd(a.g) ? null : a.g;
  }
  function Ca(a) {
    return nd(a.g.k) ? null : a.g.k;
  }
  function Gc(a) {
    return nd(a.i.n) ? null : a.i.n;
  }
  function re() {
    return (Ve = (Ve + 1) | 0), Ve;
  }
  function ca(a) {
    return function (b, c) {
      return x(s(new Lh(26), a), c.a);
    };
  }
  function jc(a) {
    return function (b, c, d) {
      return Qa(x(o(new Lh(a), d), Ya(c.a, d.c)), c.a);
    };
  }
  function se(a) {
    return function (b, c, d) {
      return Qa(x(o(new Lh(a), c), Ya(c.c, d.a)), d.a);
    };
  }
  function W(a) {
    return function (b, c, d, e) {
      return Qa(x(o(o(new Lh(a), c), e), Ya(c.c, e.c)), d.a);
    };
  }
  function $f(a) {
    return a.length > 1 &&
      a.charCodeAt(0) == 48 &&
      a.charCodeAt(1) ^ 120 &&
      a.charCodeAt(1) ^ 88
      ? parseInt(a, 8)
      : a | 0;
  }
  function ag() {
    var a = new Qh(),
      b = function (c, d, e) {
        return ge(c.a, d.a), x(s(new Lh(27), L), Ya(d.a, e.c));
      },
      f = function (h, m, l, g) {
        return ge(h.a, l.a), x(s(new Lh(27), L), Ya(m.c, g.c));
      };
    return (
      R(a, 36, function (i, n) {
        return x(s(Ba(new Lh(28), !0), Y), n.a);
      }),
      R(a, 13, function (k, p) {
        return x(s(Ba(new Lh(28), !1), Y), p.a);
      }),
      R(a, 97, function (t, w) {
        return x(s(_(new Lh(30), $f(N(w.a))), fa), w.a);
      }),
      R(a, 95, function (v, q) {
        return x(s(ma(new Lh(29), +N(q.a)), $), q.a);
      }),
      R(a, 3, ca(Y)),
      R(a, 5, ca(Rb)),
      R(a, 6, ca(Sb)),
      R(a, 7, ca(Tb)),
      R(a, 14, ca($)),
      R(a, 20, ca(fa)),
      R(a, 22, ca(yb)),
      R(a, 23, ca(zb)),
      R(a, 24, ca(Ab)),
      R(a, 26, ca(ob)),
      R(a, 27, ca(pb)),
      R(a, 28, ca(qb)),
      R(a, 39, ca(Fa)),
      R(a, 40, ca(Ga)),
      R(a, 41, ca(Ha)),
      R(a, 42, ca(Gd)),
      Mb(a, 46, 14, b),
      Mb(a, 47, 14, jc(34)),
      Mb(a, 48, 14, jc(35)),
      Mb(a, 62, 14, jc(31)),
      Mb(a, 49, 14, jc(32)),
      Mb(a, 65, 14, jc(33)),
      Be(a, 47, 15, se(36)),
      Be(a, 48, 15, se(37)),
      S(a, 53, 13, W(39)),
      S(a, 54, 10, W(40)),
      S(a, 55, 10, W(41)),
      S(a, 56, 10, W(42)),
      S(a, 57, 10, W(44)),
      S(a, 58, 10, W(45)),
      S(a, 62, 12, W(51)),
      S(a, 63, 13, W(49)),
      S(a, 64, 10, W(50)),
      S(a, 65, 12, W(38)),
      S(a, 66, 13, f),
      S(a, 67, 11, f),
      S(a, 68, 11, f),
      S(a, 60, 3, W(47)),
      S(a, 61, 4, W(48)),
      S(a, 59, 5, W(46)),
      S(a, 50, 8, f),
      S(a, 51, 6, f),
      S(a, 52, 7, f),
      ta(a, 69, 2, W(52)),
      ta(a, 70, 2, W(53)),
      ta(a, 71, 2, f),
      ta(a, 72, 2, f),
      ta(a, 73, 2, f),
      ta(a, 74, 2, W(54)),
      ta(a, 75, 2, W(55)),
      ta(a, 76, 2, f),
      ta(a, 77, 2, f),
      ta(a, 78, 2, f),
      ta(a, 79, 2, W(56)),
      R(a, 96, function (E, F) {
        var I = N(F.a),
          O = xd(E.l, I);
        return O
          ? (O.m != null &&
              ya(E.c.a, O.m, 0) == 1 &&
              u(
                E.a,
                F.a,
                'Cannot use "' + I + '" from disabled extension "' + O.m + '"'
              ),
            (O.g = (O.g + 1) | 0),
            x(O instanceof $b ? s(new Lh(26), K(O)) : Ec(new Lh(23), O), F.a))
          : (Nf(E.a, F.a), x(s(new Lh(24), L), F.a));
      }),
      S(a, 81, 1, function (ha, M, ia, Z) {
        return (
          M.b ^ 25 && (M = x(o(new Lh(25), M), M.c)), o(M, Z), x(M, B(ha, M.c))
        );
      }),
      (Da(a, 82, 16).c = function (aa, ea) {
        var ua = z(aa).a;
        D(aa);
        var ba = z(aa).a;
        return A(aa, 96)
          ? Qa(x(hc(o(new Lh(21), ea), N(ba)), B(aa, ea.c)), ba)
          : Qa(x(hc(o(new Lh(21), ea), ''), B(aa, ea.c)), De(ua));
      }),
      (Da(a, 85, 0).b = function (ka) {
        var va = D(ka),
          Ta = U(a, ka, 0);
        return !Ta || !A(ka, 89)
          ? x(s(new Lh(24), L), B(ka, va.a))
          : x(Ta, B(ka, va.a));
      }),
      (Da(a, 85, 15).c = function (la, rb) {
        var La = D(la),
          Ua = o(new Lh(20), rb);
        return bg(la, Ua, 89)
          ? Qa(x(Ua, B(la, rb.c)), B(la, La.a))
          : x(s(new Lh(24), L), B(la, La.a));
      }),
      (Da(a, 84, 16).c = function (wa, xa) {
        var bb = D(wa);
        if (z(wa).b == 88)
          return Kb(wa), D(wa), x(s(new Lh(24), L), B(wa, bb.a));
        var Ia = U(a, wa, 0);
        return !Ia || !A(wa, 88)
          ? x(s(new Lh(24), L), B(wa, bb.a))
          : Qa(x(o(o(new Lh(43), xa), Ia), B(wa, xa.c)), B(wa, bb.a));
      }),
      (Da(a, 86, 2).c = function (Ja, cb) {
        var sb = D(Ja),
          tb = U(a, Ja, 1);
        if (!tb || !A(Ja, 80)) return x(s(new Lh(24), L), B(Ja, sb.a));
        var Ub = U(a, Ja, 1);
        return Ub
          ? x(o(o(o(new Lh(22), cb), tb), Ub), B(Ja, cb.c))
          : x(s(new Lh(24), L), B(Ja, sb.a));
      }),
      a
    );
  }
  function bg(a, b, c) {
    for (var d = !0; !Q(a, c); ) {
      d || A(a, 81);
      var e = z(a),
        f = U(ab, a, 1);
      if (f) o(b, f);
      else if (
        (o(b, x(s(new Lh(24), L), B(a, e.a))), z(a).b ^ 81 && z(a).b ^ c)
      )
        return !1;
      d = !1;
    }
    return !0;
  }
  function cg(a) {
    var b = D(a);
    a.l = new Xh(3, a.l);
    var c = Xa(a, 2);
    if (!c || !A(a, 43) || !A(a, 85)) return null;
    var d = U(ab, a, 0);
    return !d || !A(a, 89) ? null : (Lb(a), Ib(a, b.a, o(o(new Lh(7), c), d)));
  }
  function dg(a) {
    var b = D(a),
      c = a.h;
    if (((a.h |= b.b ^ 44 ? 2048 : 1024), Q(a, 83))) {
      var d = new Lh(13);
      return !kc(a, d, 1) || !A(a, 87) ? null : ((a.h = c), x(d, B(a, b.a)));
    }
    var e = Xa(a, 1);
    return e && ((a.h = c), e);
  }
  function fg(a) {
    var b = D(a),
      c = z(a).a;
    if (!A(a, 96)) return null;
    var d = N(c);
    if (Q(a, 83)) {
      a.c.a.has(d) || Na(a.c.a, d, 0);
      var e = new Lh(13);
      if (!kc(a, e, 1) || !A(a, 87)) return null;
      for (var f = e.g; f; f = f.k)
        if (f.b ^ 17) f.e && (f.e.m = d);
        else for (var h = f.g.k; h; h = h.k) h.e.m = d;
      return x(e, B(a, b.a));
    }
    if (
      (!dh.has(d) &&
        !a.c.a.has(d) &&
        Kf(
          a.a,
          c,
          'The extension "' +
            d +
            '" is not in the known list of valid WebGL extensions'
        ),
      !A(a, 80))
    )
      return null;
    var m = N(z(a).a);
    if (!eg.has(m)) return Kb(a), null;
    D(a);
    var l = eg.get(m);
    return Na(a.c.a, d, l), Qa(x(_(hc(new Lh(9), d), l), B(a, b.a)), c);
  }
  function gg(a) {
    var b = D(a);
    if (((a.l = new Xh(3, a.l)), !A(a, 85))) return null;
    var c = null;
    if (!Q(a, 90)) {
      var d = ve(a),
        e = od(a, 2),
        f = null;
      if (e) {
        if (((f = Jb(a, 1)), !f)) return null;
      } else f = Jb(a, 0);
      if (f) {
        if (((c = ue(a, b.a, e, f, 0, d)), !c)) return null;
      } else if (((c = U(ab, a, 0)), !c) || !A(a, 90)) return null;
    }
    var h = null;
    if (!Q(a, 90) && (((h = U(ab, a, 0)), !h) || !A(a, 90))) return null;
    var m = null;
    if (!Q(a, 89) && (((m = U(ab, a, 0)), !m) || !A(a, 89))) return null;
    var l = Xa(a, 2);
    return l && (Lb(a), x(qe(c, h, m, l), B(a, b.a)));
  }
  function hg(a) {
    var b = D(a);
    if (!A(a, 85)) return null;
    var c = z(a),
      d = U(ab, a, 0);
    if ((d || (d = x(s(new Lh(24), L), B(a, c.a))), !A(a, 89))) return null;
    var e = Xa(a, 2);
    if (!e) return null;
    var f = null;
    return Q(a, 12) && ((f = Xa(a, 2)), !f)
      ? null
      : x(o(o(o(new Lh(12), d), e), f), B(a, b.a));
  }
  function ig(a) {
    var b = D(a),
      c = z(a).a;
    return A(a, 97) ? x(_(new Lh(18), N(c) | 0), B(a, b.a)) : null;
  }
  function jg(a) {
    var b = D(a);
    if (((a.l = new Xh(3, a.l)), !A(a, 85))) return null;
    var c = z(a),
      d = U(ab, a, 0);
    if ((d || (d = x(s(new Lh(24), L), B(a, c.a))), !A(a, 89))) return null;
    var e = Xa(a, 2);
    return e && (Lb(a), x(o(o(new Lh(19), d), e), B(a, b.a)));
  }
  function kg(a) {
    var b = D(a),
      c = null;
    if (!Q(a, 90)) {
      var d = z(a);
      (c = U(ab, a, 0)), c || (c = x(s(new Lh(24), L), B(a, d.a))), A(a, 90);
    }
    return x(o(new Lh(15), c), B(a, b.a));
  }
  function lg(a) {
    var b = D(a),
      c = 0;
    switch (z(a).b) {
      case 25:
        c = 32;
        break;
      case 29:
        c = 64;
        break;
      case 16:
        c = 4;
        break;
      default:
        return Kb(a), null;
    }
    D(a);
    var d = Jb(a, 1);
    return d && Ib(a, b.a, o(_(new Lh(14), c), d));
  }
  function mg(a, b, c) {
    var d = z(a).a;
    if (!A(a, 96)) return null;
    var e = new $b(uc(a.c), d, N(d), new Xh(4, a.l));
    if (((e.e |= a.h | b), (e.f = c), !pd(a, e))) return null;
    var f = z(a).a,
      h = new Lh(1),
      m = null;
    if (!A(a, 83)) return null;
    for (a.l = e.d; z(a).b ^ 87 && z(a).b ^ 99; ) {
      var l = Xa(a, 3);
      if (!l) return null;
      if (l.b ^ 17)
        u(a.a, l.c, 'This statement cannot be used inside a struct');
      else {
        o(h, l);
        for (var g = l.g.k; g; g = g.k) {
          var i = g.e;
          e.i.push(i),
            P(i) && u(a.a, P(i).c, 'Cannot initialize struct variables');
        }
      }
    }
    if ((Lb(a), !A(a, 87))) return null;
    if ((x(h, B(a, f)), z(a).b ^ 96)) A(a, 90);
    else if (((m = ze(0, s(new Lh(26), K(e)), D(a).a, a, c)), !m)) return null;
    return o(o(Ec(new Lh(16), e), h), m);
  }
  function te(a, b, c) {
    for (var d = !1, e = a.l; e; e = e.b)
      if (e.a == 3) {
        d = !0;
        break;
      }
    return (
      d || u(a.a, b, 'This statement cannot be used outside a loop'),
      Ib(a, b, c)
    );
  }
  function Ib(a, b, c) {
    return A(a, 90), x(c, B(a, b));
  }
  function ue(a, b, c, d, e, f) {
    var h = z(a).a;
    if (!c && z(a).b ^ 96) {
      var m = Ae(ab, a, 0, d);
      return m && Ib(a, b, o(new Lh(8), m));
    }
    if (!A(a, 96)) return null;
    if (Q(a, 85)) return og(c, d, h, a, f);
    var l = ze(c, d, h, a, f);
    return l && x(l, B(a, b));
  }
  function ve(a) {
    var b = z(a),
      c = b.c;
    if (!c) return null;
    for (
      var d = b.a.b, e = null, f = (c.length - 1) | 0;
      f > -1;
      f = (f - 1) | 0
    ) {
      for (
        var h = c[f], m = h.a.b.slice(h.c, d), l = 0, g = 0;
        g < m.length;
        g = (g + 1) | 0
      ) {
        var i = m.charCodeAt(g);
        (i == 13 || i == 10) &&
          ((l = (l + 1) | 0),
          i == 13 &&
            ((g + 1) | 0) < m.length &&
            m.charCodeAt((g + 1) | 0) == 10 &&
            (g = (g + 1) | 0));
      }
      if (l > 1) break;
      (e || (e = [])).push(N(h)), (d = h.b);
    }
    return e && e.reverse(), e;
  }
  function Xa(a, b) {
    var c = z(a);
    switch (c.b) {
      case 4:
        return te(a, D(a).a, new Lh(4));
      case 9:
        return te(a, D(a).a, new Lh(5));
      case 10:
        return Ib(a, D(a).a, new Lh(6));
      case 11:
        return cg(a);
      case 44:
      case 45:
        return dg(a);
      case 91:
        return fg(a);
      case 15:
        return gg(a);
      case 17:
        return hg(a);
      case 83:
        return xe(a);
      case 31:
        return lg(a);
      case 32:
        return kg(a);
      case 90:
        return x(new Lh(3), D(a).a);
      case 92:
        return ig(a);
      case 43:
        return jg(a);
    }
    var d = ve(a),
      e = od(a, b),
      f = null;
    if (Q(a, 35)) {
      var h = mg(a, e, d);
      return h && x(h, B(a, c.a));
    }
    if (e) {
      if (((f = Jb(a, 1)), !f)) return null;
    } else f = Jb(a, 0);
    if (f) return ue(a, c.a, e, f, 1, d);
    var m = U(ab, a, 0);
    return m && Ib(a, c.a, o(new Lh(8), m));
  }
  function we(a, b) {
    if (b.b ^ 17 && b.b ^ 16) {
      var c = a.l.a == 1 || a.l.a == 4,
        d = b.b == 9 || b.b == 11 || b.b == 14 || b.b == 18;
      d && !c
        ? u(a.a, b.c, 'This statement cannot be used inside a function')
        : !d &&
          c &&
          u(a.a, b.c, 'This statement cannot be used outside a function');
    }
  }
  function ng(a, b) {
    var c = z(a).a;
    if (!A(a, 98)) return !1;
    var d = null;
    try {
      d = JSON.parse(N(c));
    } catch (l) {
      return u(a.a, c, 'Invalid string literal'), !1;
    }
    var e = a.c.b;
    if (!e)
      return (
        u(a.a, c, 'Cannot include files without access to a file system'), !1
      );
    var f = e(d, c.a.a);
    if (!f) return u(a.a, c, 'Cannot read the file ' + JSON.stringify(d)), !1;
    if (a.e.has(f.a)) return !0;
    Na(a.e, f.a, !0), a.f.push(new Nh(c, Gg(f)));
    var h = Lc(a.a, f, 0),
      m = new Oh(a.a, h, a.c, a.d, a.e);
    return (m.l = a.l), !kc(m, b, 1) || !A(m, 99) ? !1 : !0;
  }
  function xe(a) {
    var b = z(a),
      c = new Lh(3);
    return (
      (a.l = new Xh(2, a.l)),
      !A(a, 83) || !kc(a, c, 2) || !A(a, 87) ? null : (Lb(a), x(c, B(a, b.a)))
    );
  }
  function od(a, b) {
    for (var c = 0; ; ) {
      var d = z(a).b;
      switch (d) {
        case 2:
          c |= 1;
          break;
        case 8:
          c |= 2;
          break;
        case 16:
          c |= 4;
          break;
        case 18:
          c |= 8;
          break;
        case 19:
          c |= 16;
          break;
        case 25:
          c |= 32;
          break;
        case 29:
          c |= 64;
          break;
        case 30:
          c |= 128;
          break;
        case 37:
          c |= 256;
          break;
        case 38:
          c |= 512;
          break;
        default:
          return c;
      }
      ((!b && (d == 2 || d == 37 || d == 38)) ||
        (b == 3 && d ^ 25 && d ^ 29 && d ^ 16) ||
        (b && (d == 18 || d == 30 || d == 19))) &&
        u(a.a, z(a).a, 'Cannot use this qualifier here'),
        D(a);
    }
  }
  function Jb(a, b) {
    var c = z(a),
      d = null;
    switch (c.b) {
      case 3:
        d = Y;
        break;
      case 5:
        d = Rb;
        break;
      case 6:
        d = Sb;
        break;
      case 7:
        d = Tb;
        break;
      case 14:
        d = $;
        break;
      case 20:
        d = fa;
        break;
      case 22:
        d = yb;
        break;
      case 23:
        d = zb;
        break;
      case 24:
        d = Ab;
        break;
      case 26:
        d = ob;
        break;
      case 27:
        d = pb;
        break;
      case 28:
        d = qb;
        break;
      case 33:
        d = Pg;
        break;
      case 34:
        d = Qg;
        break;
      case 39:
        d = Fa;
        break;
      case 40:
        d = Ga;
        break;
      case 41:
        d = Ha;
        break;
      case 42:
        d = Gd;
        break;
      case 96:
        var e = xd(a.l, N(c.a));
        if (!e || !(e instanceof $b)) return b ^ 1 || Kb(a), null;
        d = K(e);
        break;
      default:
        return b ^ 1 || Kb(a), null;
    }
    return D(a), x(s(new Lh(26), d), B(a, c.a));
  }
  function og(a, b, c, d, e) {
    var f = d.l,
      h = new mc(uc(d.c), c, N(c), new Xh(0, f));
    if (
      ((h.e |= d.h | a | (h.c == 'main' ? 1024 : 0)),
      (h.f = e),
      (h.k = b),
      (d.l = h.d),
      Q(d, 42))
    ) {
      if (!A(d, 89)) return null;
    } else if (!Q(d, 89)) {
      for (;;) {
        var m = od(d, 0),
          l = Jb(d, 1);
        if (!l) return null;
        var g = z(d).a;
        if (!A(d, 96)) return null;
        var i = new Me(uc(d.c), g, N(g), d.l, 0);
        if (((i.e |= m), (i.q = l), h.n.push(i), pd(d, i), !ye(d, i)))
          return null;
        if (!Q(d, 81)) break;
      }
      if (!A(d, 89)) return null;
    }
    var n = ya(f.c, N(c), null),
      k = !Q(d, 90);
    if (n) {
      if (n instanceof mc) {
        for (var p = n; p; p = p.t)
          if (Ig(p, h)) {
            p.k.f != h.k.f
              ? Of(d.a, h.k.c, h.c, h.k.f, p.k.f, p.k.c)
              : p.p || !k
              ? id(d.a, h.b, p.b)
              : ((p.w = h), (h.w = p), (h.e |= p.e), (p.e = h.e));
            break;
          }
        (h.t = n), Fg(f, h);
      } else return id(d.a, c, n.b), null;
    } else Le(f, h);
    if (k) {
      var t = d.h;
      if (((d.h &= -3073), (h.p = xe(d)), (d.h &= t), !h.p)) return null;
    }
    return Lb(d), x(Ec(new Lh(11), h), B(d, b.c));
  }
  function ye(a, b) {
    var c = z(a);
    if (Q(a, 84)) {
      if (Q(a, 88))
        return u(a.a, B(a, c.a), 'All array sizes must be specified'), !0;
      if (((b.F = U(ab, a, 0)), !b.F || !A(a, 88))) return !1;
      var d = 0;
      if ((X(a.d, b.F), pa(a.d, b.F, fa), b.F.f != L)) {
        var e = G(b.F);
        if (e) {
          if (e.b == 30) {
            var f = e.h | 0;
            f < 1
              ? u(
                  a.a,
                  b.F.c,
                  'Cannot declare an array with a size of "' + f + '"'
                )
              : (d = f);
          }
        } else u(a.a, b.F.c, 'This value must be a compile-time constant');
      }
      for (; z(a).b == 84; ) {
        if (((c = D(a)), (z(a).b ^ 88 && !U(ab, a, 0)) || !A(a, 88))) return !1;
        u(
          a.a,
          B(a, c.a),
          'Multidimensional arrays are not a part of the language'
        );
      }
      b.q = x(s(new Lh(26), Mg(b.q.f, d)), b.q.c);
    }
    return !0;
  }
  function ze(a, b, c, d, e) {
    for (var f = o(_(new Lh(17), d.h | a), b); ; ) {
      var h = new Me(
        uc(d.c),
        c,
        N(c),
        d.l,
        d.l.a ^ 1 ? (d.l.a ^ 4 ? 2 : 3) : 1
      );
      if (((h.e |= d.h | a), (h.f = e), (h.q = b), !ye(d, h))) return null;
      var m = z(d).a,
        l = null;
      if (Q(d, 69)) {
        var g = z(d);
        (l = U(ab, d, 1)), l || (l = x(s(new Lh(24), L), B(d, g.a)));
      } else m = null;
      var i = Qa(x(o(Ec(new Lh(2), h), l), B(d, h.b)), m);
      if (((h.E = i), h.e & 2 && X(d.d, i), o(f, i), pd(d, h), !Q(d, 81)))
        return A(d, 90), f;
      if (((c = z(d).a), !A(d, 96))) return null;
    }
  }
  function pd(a, b) {
    var c = ya(a.l.c, b.c, null);
    return c ? (id(a.a, b.b, c.b), !1) : (Le(a.l, b), !0);
  }
  function kc(a, b, c) {
    for (; z(a).b ^ 99 && z(a).b ^ 87; ) {
      var d = z(a).a;
      if (Q(a, 93)) {
        if (c ^ 1)
          return (
            u(a.a, d, '"#include" statements cannot be used here'), Q(a, 98), !1
          );
        if (!ng(a, b)) return !1;
      } else {
        var e = Xa(a, c);
        if (!e) return !1;
        if (e.b ^ 13) we(a, e), o(b, e);
        else
          for (; e.g; ) {
            var f = r(e.g);
            we(a, f), o(b, f);
          }
      }
    }
    return !0;
  }
  function qd(a, b, c, d, e, f) {
    ab || (ab = ag());
    var h = new Map(),
      m = new Oh(a, b, d, f, h);
    return (m.l = e), kc(m, c, 1) && A(m, 99), new Mh(m.f);
  }
  function z(a) {
    return a.b[a.m];
  }
  function D(b) {
    var a = z(b);
    return ((b.m + 1) | 0) < b.b.length && (b.m = (b.m + 1) | 0), a;
  }
  function B(c, a) {
    var b = c.b[c.m > 0 ? (c.m - 1) | 0 : 0];
    return b.a.c < a.b ? a : Ya(a, b.a);
  }
  function Q(b, a) {
    return z(b).b ^ a ? !1 : (D(b), !0);
  }
  function A(e, a) {
    if (Q(e, a)) return !0;
    var b = z(e),
      c = b.a,
      d = (e.m > 0 ? e.b[(e.m - 1) | 0] : b).a;
    return (
      a == 90 || Ce(d).a ^ Ce(c).a
        ? u(e.a, De(d), 'Expected ' + Ue[a])
        : u(e.a, c, 'Expected ' + Ue[a] + ' but found ' + Ue[b.b]),
      !1
    );
  }
  function Kb(a) {
    Mf(a.a, z(a));
  }
  function Lb(a) {
    a.l = a.l.b;
  }
  function Da(e, a, b) {
    var c = ra(e.a, a, null);
    if (c) b > c.a && (c.a = b);
    else {
      var d = new Ph(b);
      (c = d), za(e.a, a, d);
    }
    return c;
  }
  function U(f, a, b) {
    var c = z(a),
      d = ra(f.a, c.b, null);
    if (!d || !d.b) return Kb(a), null;
    var e = Ae(f, a, b, d.b(a));
    return e;
  }
  function Ae(f, a, b, c) {
    for (; c; ) {
      var d = z(a).b,
        e = ra(f.a, d, null);
      if (!e || !e.c || e.a <= b) break;
      c = e.c(a, c);
    }
    return c;
  }
  function R(d, a, b) {
    Da(d, a, 0).b = function (c) {
      return b(c, D(c));
    };
  }
  function Mb(h, a, b, c) {
    Da(h, a, 0).b = function (d) {
      var e = D(d),
        f = U(h, d, b);
      return f && c(d, e, f);
    };
  }
  function Be(f, a, b, c) {
    Da(f, a, b).c = function (d, e) {
      return c(d, e, D(d));
    };
  }
  function S(m, a, b, c) {
    Da(m, a, b).c = function (d, e) {
      var f = D(d),
        h = U(m, d, b);
      return h && c(d, e, f, h);
    };
  }
  function ta(m, a, b, c) {
    Da(m, a, b).c = function (d, e) {
      var f = D(d),
        h = U(m, d, (b - 1) | 0);
      return h && c(d, e, f, h);
    };
  }
  function N(a) {
    return a.a.b.slice(a.b, a.c);
  }
  function rd(b) {
    var a = Pb(b.a, b.b);
    return b.a.a + ':' + ((a.a + 1) | 0) + ':' + ((a.b + 1) | 0);
  }
  function pg(b, a) {
    return b.a == a.a && b.b < a.c && a.b < b.c;
  }
  function lc(b, a) {
    return b.b <= a && a <= b.c;
  }
  function sd(q, a) {
    for (
      var b = Pb(q.a, q.b),
        c = Pb(q.a, q.c),
        d = Hg(q.a, b.a),
        e = b.b,
        f = c.a ^ b.a ? d.length : c.b,
        h = Ye(bh, d, 0),
        m = [],
        l = 0,
        g = 0;
      ;

    ) {
      h.b ^ e || (l = m.length), h.b ^ f || (g = m.length);
      var i = Ze(h);
      if (i < 0) break;
      if (i ^ 9) m.push(i);
      else
        for (var n = 0, E = (8 - (m.length % 8)) | 0; n < E; n = (n + 1) | 0)
          m.push(32);
    }
    var k = m.length;
    if (a > 0 && k > a) {
      var p = Math.min((g - l) | 0, (a / 2) | 0),
        t = Math.max((((a - p) | 0) / 2) | 0, 3);
      if (l < t)
        (d = tc(m.slice(0, (a - 3) | 0)) + '...'),
          g > ((a - 3) | 0) && (g = (a - 3) | 0);
      else if (((k - l) | 0) < ((a - t) | 0)) {
        var w = (k - a) | 0;
        (d = '...' + tc(m.slice((w + 3) | 0, k))),
          (l = (l - w) | 0),
          (g = (g - w) | 0);
      } else {
        var v = (l - t) | 0;
        (d = '...' + tc(m.slice((v + 3) | 0, (((v + a) | 0) - 3) | 0)) + '...'),
          (l = (l - v) | 0),
          (g = (g - v) | 0),
          g > ((a - 3) | 0) && (g = (a - 3) | 0);
      }
    } else d = tc(m);
    return new Rh(
      d,
      bc(' ', l) + (((g - l) | 0) < 2 ? '^' : bc('~', (g - l) | 0))
    );
  }
  function qg(c, a, b) {
    return new Sh(c.a, (c.b + a) | 0, (c.b + b) | 0);
  }
  function Ce(a) {
    return Pb(a.a, a.b);
  }
  function De(a) {
    return new Sh(a.a, a.c, a.c);
  }
  function Ya(a, b) {
    return new Sh(a.a, a.b, b.c);
  }
  function rg(a) {
    var b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'[a % 53];
    for (a = (a / 53) | 0; a > 0; )
      (a = (a - 1) | 0),
        (b += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789'[
          a % 63
        ]),
        (a = (a / 63) | 0);
    return b;
  }
  function sg(n, a) {
    for (var b = 0, k = a.length; b < k; b = (b + 1) | 0)
      (n.h = b), lb(n, a[b]);
    ug(n);
    var c = new Map(),
      d = Ee(n, n.f, null);
    d.sort(function (e, f) {
      return Xc(Fe(n, f), Fe(n, e));
    });
    for (var E = 0, F = d.length; E < F; E = (E + 1) | 0)
      for (var h = d[E], m = null, v = 0, q = h.length; v < q; v = (v + 1) | 0)
        for (
          var l = h[v], p = 0, t = Array.from(l.c.values()), w = t.length;
          p < w;
          p = (p + 1) | 0
        ) {
          var g = t[p],
            i = g.c;
          !(g.e & 3072) &&
            (!n.a || (n.a == 1 && !(g.e & 257))) &&
            (m == null && (m = tg(n)), (g.c = m)),
            !(g.e & 2048) && g.e & 257 && Na(c, i, g.c);
        }
    return c;
  }
  function lb(f, a) {
    var m, h;
    a.e && ((h = td(f, a.e)).d = (h.d + 1) | 0);
    for (var b = a.g; b; b = b.k) lb(f, b);
    switch (a.b) {
      case 2:
        var c = a.e;
        lb(f, c.q), P(c) && lb(f, P(c));
        break;
      case 11:
        var d = a.e;
        (f.l = f.d.get(a.e.a).b), d.w && Fd(f.f, f.l, td(f, d.w).b), lb(f, d.k);
        for (var l = 0, g = d.n, i = g.length; l < i; l = (l + 1) | 0) {
          var e = g[l];
          ((m = td(f, e)).d = (m.d + 1) | 0), lb(f, e.q);
        }
        d.p && lb(f, d.p), (f.l = -1);
        break;
    }
  }
  function td(c, a) {
    var b = ra(c.d, a.a, null);
    return (
      b ||
        ((b = new Uh(a.c, c.c.length)),
        (b.e = Bd(a)),
        c.c.push(b),
        za(c.d, a.a, b),
        Pe(c.e),
        Pe(c.f)),
      b.c.has(c.h) || za(b.c, c.h, a),
      Bd(a) && Fd(c.e, c.l, b.b),
      b
    );
  }
  function tg(b) {
    for (;;) {
      var a = rg(b.m);
      if (
        ((b.m = (b.m + 1) | 0),
        !Kg.has(a) && !Lg.has(a) && !a.startsWith('gl_'))
      )
        return a;
    }
  }
  function Ee(h, a, b) {
    for (
      var c = new Map(), m = 0, l = h.c, g = l.length;
      m < g;
      m = (m + 1) | 0
    ) {
      var d = l[m];
      if (!b || b(d)) {
        var e = Oc(a, d.b),
          f = ra(c, e, null);
        f || ((f = []), za(c, e, f)), f.push(d);
      }
    }
    return Array.from(c.values());
  }
  function ug(b) {
    vg(
      b,
      Ee(b, b.e, function (a) {
        return a.e;
      })
    );
  }
  function vg(m, a) {
    for (var b = [], g = 0, i = a.length; g < i; g = (g + 1) | 0) {
      var c = a[g];
      c.sort(function (d, e) {
        return Xc(e.d, d.d);
      });
      for (var f = 0, l = c.length; f < l; f = (f + 1) | 0) {
        var h = c[f];
        f < b.length ? Fd(m.f, h.b, b[f]) : b.push(h.b);
      }
    }
  }
  function Fe(d, a) {
    for (var b = 0, e = 0, f = a.length; e < f; e = (e + 1) | 0) {
      var c = a[e];
      b = (b + c.d) | 0;
    }
    return b;
  }
  function ud(f, a) {
    X(f, a);
    for (var h = 0, m = f.d, l = m.length; h < l; h = (h + 1) | 0) {
      var b = m[h];
      r(b);
    }
    var c = a.g;
    f.d.length && Fc(a, c, f.d[0]);
    for (
      var g = 0, i = Array.from(f.e.values()), n = i.length;
      g < n;
      g = (g + 1) | 0
    ) {
      var d = i[g];
      Fc(a, c, d);
    }
    f.a.b = f.a.b.filter(function (e) {
      return e.g == 0;
    });
  }
  function vd(b, a) {
    a.b.a.a != '<api>' && !a.g && !(a.e & 1024) && b.a.b.push(a);
  }
  function X(q, a) {
    if (!a.f) {
      a.f = L;
      var b = a.b;
      switch (b) {
        case 0:
        case 1:
          wd(q, a);
          break;
        case 2:
          var c = a.e;
          vd(q, c), X(q, c.q);
          var d = c.q.f;
          if (
            (d == Gd &&
              (u(q.a, c.q.c, 'Cannot create a variable of type "' + C(d) + '"'),
              (d = L)),
            c.F && (ja(q, c.F), pa(q, c.F, fa)),
            P(c) && (ja(q, P(c)), pa(q, P(c), d), d.d && he(q.a, a.d, d)),
            c.e & 2)
          )
            if (P(c)) {
              if (P(c).f != L) {
                var e = G(P(c));
                e
                  ? (c.h = e)
                  : u(
                      q.a,
                      P(c).c,
                      'This value must be a compile-time constant'
                    );
              }
            } else c.v ^ 2 || u(q.a, c.b, 'Constants must be initialized');
          break;
        case 3:
          mb(q, a);
          break;
        case 4:
        case 5:
        case 6:
          break;
        case 7:
          mb(q, a.g), X(q, a.i), pa(q, a.i, Y);
          break;
        case 8:
          X(q, a.g);
          break;
        case 9:
          break;
        case 10:
          kb(a) && ja(q, kb(a)),
            Ca(a) && (ja(q, Ca(a)), pa(q, Ca(a), Y)),
            Gc(a) && ja(q, Gc(a)),
            mb(q, a.i);
          break;
        case 11:
          var f = a.e;
          vd(q, f);
          for (var E = 0, F = f.n, I = F.length; E < I; E = (E + 1) | 0) {
            var h = F[E];
            X(q, h.q);
          }
          X(q, f.k),
            f.p &&
              ((q.f = f.k.f),
              mb(q, f.p),
              q.f &&
                q.f != Gd &&
                f.p.p &&
                u(
                  q.a,
                  f.b,
                  'All control paths for "' +
                    f.c +
                    '" must return a value of type "' +
                    C(q.f) +
                    '"'
                ),
              (q.f = null));
          break;
        case 12:
          X(q, a.g), pa(q, a.g, Y), mb(q, a.g.k), a.g.k.k && mb(q, a.g.k.k);
          break;
        case 14:
          break;
        case 15:
          a.g
            ? (X(q, a.g), pa(q, a.g, q.f || L))
            : ((a.f = Gd), pa(q, a, q.f || L));
          break;
        case 16:
          var m = a.e;
          vd(q, m), wd(q, a);
          for (
            var l = K(m), O = 0, ha = m.i, M = ha.length;
            O < M;
            O = (O + 1) | 0
          ) {
            var g = ha[O],
              i = g.q.f;
            i.d && (l.d = !0), i.e && (l.e = !0);
          }
          break;
        case 17:
          wd(q, a);
          break;
        case 18:
          q.d.push(a);
          break;
        case 19:
          X(q, a.g), pa(q, a.g, Y), mb(q, a.i);
          break;
        case 20:
          yg(q, a);
          break;
        case 21:
          zg(q, a);
          break;
        case 22:
          var n = a.g,
            k = a.i,
            p = a.g.k;
          ja(q, n),
            pa(q, n, Y),
            ja(q, p),
            ja(q, k),
            p.f != k.f
              ? u(
                  q.a,
                  Ya(p.c, k.c),
                  'Cannot merge type "' + C(p.f) + '" and type "' + C(k.f) + '"'
                )
              : p.f.d
              ? Tf(q.a, Ya(p.c, k.c), p.f)
              : (a.f = p.f);
          break;
        case 23:
          var t = a.e;
          t instanceof Me
            ? (X(q, t.q), (a.f = t.q.f))
            : t instanceof mc && !Zf(a)
            ? u(q.a, a.c, 'The function "' + t.c + '" must be called')
            : (a.f = K(t));
          var w = t.m;
          w != null &&
            !q.e.has(w) &&
            !ya(q.b.a, w, 0) &&
            Na(q.e, w, _(hc(new Lh(9), w), 2));
          break;
        case 25:
          for (var v = a.g; v; v = v.k) ja(q, v);
          a.f = a.i.f;
          break;
        default:
          kd(b) ? wg(q, a) : Cc(b) && xg(q, a);
          break;
      }
    }
  }
  function mb(c, a) {
    if ((ff(c.c, a), a.b ^ 3)) X(c, a), Nd(c.c, a);
    else for (var b = a.g; b; b = b.k) X(c, b), Nd(c.c, b);
    gf(c.c, a);
  }
  function wg(d, a) {
    var b = a.g;
    ja(d, b), ld(a.b) && Ge(d, b);
    var c = b.f;
    switch (a.b) {
      case 31:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
        a.f = Ng(c) ? c : L;
        break;
      case 32:
        a.f = c == Y ? Y : L;
        break;
    }
    a.f == L &&
      c != L &&
      u(d.a, a.d, 'No unary operator "' + N(a.d) + '" for type "' + C(c) + '"');
  }
  function xg(i, a) {
    var b = a.g,
      c = a.i;
    ja(i, b), ja(i, c), Dc(a.b) && Ge(i, b);
    var d = b.f,
      e = c.f,
      f = d == e;
    switch (a.b) {
      case 38:
      case 51:
      case 49:
      case 39:
        a.f =
          (f && da(d)) || (Nc(d) && e == $) || (Mc(d) && e == fa)
            ? d
            : (d == $ && Nc(e)) || (d == fa && Mc(e))
            ? e
            : a.b == 49 && ((d == Fa && e == ob) || (d == ob && e == Fa))
            ? Fa
            : a.b == 49 && ((d == Ga && e == pb) || (d == pb && e == Ga))
            ? Ga
            : a.b == 49 && ((d == Ha && e == qb) || (d == qb && e == Ha))
            ? Ha
            : L;
        break;
      case 40:
      case 50:
        a.f = f && Og(d) ? Y : L;
        break;
      case 46:
      case 47:
      case 48:
        a.f = f && d == Y ? Y : L;
        break;
      case 44:
      case 45:
      case 41:
      case 42:
        a.f = f && (d == $ || d == fa) ? Y : L;
        break;
      case 52:
        (a.f = d), d.d && he(i.a, a.d, d), pa(i, c, d);
        return;
      case 53:
      case 56:
      case 55:
      case 54:
        a.f =
          (f && da(d)) ||
          (Nc(d) && e == $) ||
          (Mc(d) && e == fa) ||
          (a.b == 55 &&
            ((d == Fa && e == ob) ||
              (d == Ga && e == pb) ||
              (d == Ha && e == qb)))
            ? d
            : L;
        break;
      case 43:
        if (e == fa) {
          var h = Dd(d);
          h && (a.f = h);
          var m = G(c);
          if (m && m.b == 30) {
            var l = m.h | 0,
              g = Sa(d);
            (l < 0 || (g && l >= g)) &&
              u(
                i.a,
                c.c,
                'Index "' + l + '" is out of bounds for type "' + C(d) + '"'
              );
          }
        }
        break;
    }
    a.f == L &&
      d != L &&
      e != L &&
      (a.b ^ 43
        ? Uf(i.a, a.d, N(a.d), d, e)
        : u(
            i.a,
            a.d,
            'No index operator for type "' + C(d) + '" and type "' + C(e) + '"'
          ));
  }
  function yg(m, a) {
    var b = a.g;
    X(m, b);
    for (var c = b.f, d = c.a, e = [], f = !1, h = b.k; h; h = h.k)
      ja(m, h), e.push(h), h.f == L && (f = !0);
    if (!f) {
      if (d) {
        if (d instanceof mc) {
          Ag(m, d, a, e);
          return;
        }
        if (d instanceof $b) {
          Bg(m, c, a, e);
          return;
        }
      }
      c != L && u(m.a, b.c, 'Cannot call type "' + C(c) + '"');
    }
  }
  function zg(m, a) {
    var b = a.g,
      c = a.m,
      d = a.d;
    if ((ja(m, b), c != '')) {
      var e = b.f,
        f = ne(a);
      switch (e) {
        case Rb:
        case yb:
        case Fa:
        case Sb:
        case zb:
        case Ga:
        case Tb:
        case Ab:
        case Ha:
          a.f = Cg(m, d, e, c, f);
          break;
        case L:
          break;
        default:
          if (e.a && e.a instanceof $b)
            for (var l = 0, g = e.a.i, i = g.length; l < i; l = (l + 1) | 0) {
              var h = g[l];
              if (h.c == c) {
                (a.e = h), X(m, h.q), (a.f = h.q.f);
                break;
              }
            }
          a.e || u(m.a, d, 'Cannot find "' + c + '" on type "' + C(e) + '"');
          break;
      }
    }
  }
  function Ag(q, a, b, c) {
    for (var d = [], e = a; e; e = e.t) ~d.indexOf(e.w) || d.push(e);
    if (
      d.length ^ 1 &&
      ((d = d.slice()),
      Eb(d, function (f) {
        return f.n.length != c.length;
      }),
      d.length ^ 1)
    ) {
      var h = d.slice();
      Eb(d, function (m) {
        for (var l = 0, E = c.length; l < E; l = (l + 1) | 0)
          if (m.n[l].q.f != c[l].f) return !0;
        return !1;
      }),
        d.length ^ 1 &&
          ((d = h),
          Eb(d, function (g) {
            for (var i = 0, F = c.length; i < F; i = (i + 1) | 0) {
              var n = g.n[i].q.f,
                k = c[i].f,
                p = Ea(n),
                t = Ea(k);
              if (n != k && (!p || !t || p ^ t)) return !0;
            }
            return !1;
          }));
    }
    if (d.length ^ 1)
      u(q.a, b.g.c, 'No matching overload for function "' + a.c + '"');
    else {
      var w = d[0];
      if (w.n.length ^ c.length) Rf(q.a, b.d, w.n.length, c.length, w.c, w.b);
      else
        for (var v = 0, I = c.length; v < I; v = (v + 1) | 0)
          pa(q, c[v], w.n[v].q.f);
      (b.g.e = w), (b.f = w.k.f);
    }
  }
  function Bg(w, a, b, c) {
    if (((b.f = a), a != L))
      if (da(a)) {
        for (
          var d = Ea(a), e = !1, f = 0, v = 0, q = c.length;
          v < q;
          v = (v + 1) | 0
        ) {
          var h = c[v],
            m = h.f,
            l = Ea(m);
          if (!da(m)) {
            m != L &&
              u(
                w.a,
                h.c,
                'Cannot use value of type "' +
                  C(m) +
                  '" when constructing type "' +
                  C(a) +
                  '"'
              );
            return;
          }
          f >= d && Pf(w.a, h.c, a, d, (f + l) | 0),
            _a(m) && (e = !0),
            (f = (f + l) | 0);
        }
        var g = _a(a) && e;
        g && c.length ^ 1
          ? u(
              w.a,
              b.d,
              'If a matrix argument is given to a matrix constructor, it is an error to have any other arguments'
            )
          : f < d && f ^ 1 && !g && Qf(w.a, b.d, a, f);
      } else {
        var i = a.a,
          n = i.i,
          k = n.length,
          p = c.length;
        if (k ^ p) Sf(w.a, b.d, k, p, i.c, i.b);
        else for (var t = 0; t < k; t = (t + 1) | 0) pa(w, c[t], n[t].q.f);
      }
  }
  function Cg(l, a, b, c, d) {
    var e = c.length;
    if (e < 1 || e > 4)
      return u(l.a, a, 'Invalid swizzle "' + c + '" on type "' + C(b) + '"'), L;
    for (
      var f = Ea(b), g = 0, i = zd(f), n = i.length;
      g < n;
      g = (g + 1) | 0
    ) {
      var h = i[g];
      if (~h.indexOf(c[0])) {
        for (var m = 1; m < e; m = (m + 1) | 0) {
          if (h.indexOf(c[m]) == -1)
            return (
              u(l.a, a, 'Invalid swizzle "' + c + '" on type "' + C(b) + '"'), L
            );
          if (d && ~c.slice(0, m).indexOf(c[m]))
            return (
              u(
                l.a,
                qg(a, m, (m + 1) | 0),
                'The field "' +
                  c[m] +
                  '" cannot be specified multiple times when used as a storage location'
              ),
              L
            );
        }
        return Ad(da(b), e);
      }
    }
    return u(l.a, a, 'Invalid swizzle "' + c + '" on type "' + C(b) + '"'), L;
  }
  function ja(b, a) {
    X(b, a),
      a.b == 26 &&
        a.f != L &&
        (u(b.a, a.c, 'Unexpected type "' + C(a.f) + '"'), (a.f = L));
  }
  function wd(c, a) {
    for (var b = a.g; b; b = b.k) X(c, b);
  }
  function Ge(c, a) {
    d: for (var b = a; ; ) {
      if (b.f == L) break;
      switch (b.b) {
        case 23:
          (b.e.e & 2 || b.e.e & 256) &&
            u(c.a, a.c, 'Cannot store to this location');
          break d;
        case 21:
          b = b.g;
          break;
        case 43:
          b = b.g;
          break;
        default:
          u(c.a, a.c, 'Cannot store to this location');
          break d;
      }
    }
  }
  function pa(c, a, b) {
    a.f != b &&
      a.f != L &&
      b != L &&
      u(
        c.a,
        a.c,
        'Cannot convert from type "' + C(a.f) + '" to type "' + C(b) + '"'
      );
  }
  function Dg(a, b, c) {
    for (;;) {
      var d = new Wh();
      if ((c.a && Jc(d, a), c.d && (Hc(d, a), Ic(d, a), Eg(d, a, b)), !d.a))
        break;
    }
    c.a && nb(a);
  }
  function nb(a) {
    switch (a.b) {
      case 12:
        if (!a.g.k.k) return !0;
        var b = a.g.k,
          c = nb(b);
        return c && b.b ^ 3 && ga(b, o(new Lh(3), md(b))), nb(a.g.k.k);
      case 10:
        return nb(a.i);
      case 11:
        var d = a.e;
        d.p && nb(d.p);
        break;
      case 19:
        return nb(a.i);
      default:
        for (var e = a.g; e; e = e.k) nb(e);
        return !1;
    }
    return !1;
  }
  function Hc(m, a) {
    for (var b = a.g; b; b = b.k) Hc(m, b);
    switch (a.b) {
      case 2:
        var c = a.e;
        P(c) && Hc(m, P(c)),
          (c.v == 2 || c.v == 1) &&
            (m.b.push(c), za(m.c, c.a, 0), za(m.d, c.a, 0));
        break;
      case 11:
        var d = a.e;
        za(m.c, d.a, 0), d.p && Hc(m, d.p);
        break;
      case 23:
        var e = a.e.a,
          f = ra(m.c, e, -1);
        ~f && za(m.c, e, (f + 1) | 0),
          oe(a) && ((f = ra(m.d, e, -1)), ~f && za(m.d, e, (f + 1) | 0));
        var h = a.e.m;
        h != null && Na(m.e, h, 0);
        break;
    }
  }
  function Ic(l, a) {
    for (var b = a.g, c = null; b; b = c) (c = b.k), Ic(l, b);
    switch (a.b) {
      case 2:
        if (
          Je(l, a.e) ||
          Ke(l, a.e) ||
          (Ie(l, a.e) && (!a.g || na(a.g) || a.e.h))
        )
          r(a), (l.a = !0);
        else {
          a.g && Ic(l, a.g);
          var d = a.e.F;
          if (d && d.b == 23) {
            var e = He(l, d.e);
            e && ((a.e.F = e), (l.a = !0));
          }
        }
        break;
      case 11:
        var f = a.e;
        Ie(l, f) && !(f.e & 1024) ? (r(a), (l.a = !0)) : f.p && Ic(l, f.p);
        break;
      case 17:
        if (!a.g.k) {
          var h = a.l.b;
          h == 3 || !h || h == 16
            ? r(a)
            : h ^ 10
            ? H(a, new Lh(3))
            : H(a, new Lh(25)),
            (l.a = !0);
        }
        break;
      case 23:
        var m = He(l, a.e);
        m && (ga(a, m), (l.a = !0));
        break;
    }
  }
  function He(b, a) {
    return Je(b, a) ? Wa(a.h) : Ke(b, a) ? Wa(P(a)) : null;
  }
  function Eg(e, a, b) {
    for (var c = a.g, d = null; c; c = d)
      (d = c.k), c.b == 9 && !e.e.has(c.m) && !ya(b.a, c.m, 0) && r(c);
  }
  function Ie(b, a) {
    return (
      ra(b.c, a.a, -1) == 0 &&
      (!(a instanceof mc) || a.w == null || ra(b.c, a.w.a, -1) == 0)
    );
  }
  function Je(b, a) {
    return a.h != null && jd(a.h.b);
  }
  function Ke(b, a) {
    return ra(b.d, a.a, -1) == 0 && P(a) != null && jd(P(a).b);
  }
  function Jc(y, a) {
    for (var b = a.g, c = null; b; b = c) (c = b.k), Jc(y, b);
    switch (a.b) {
      case 2:
        var d = a.e;
        P(d) && Jc(y, P(d));
        break;
      case 3:
        for (var e = a.g; e; e = e.k)
          if (Wf(e.b) && e.k) {
            for (; e.k; ) r(e.k);
            y.a = !0;
          }
        if (a.l && a.l.b == 3) {
          for (var f = !1, h = a.g; h; h = h.k) h.b ^ 17 || (f = !0);
          if (!f) {
            me(a), (y.a = !0);
            return;
          }
        }
        break;
      case 8:
        if (a.l.b == 3) {
          if (na(a.g)) {
            r(a), (y.a = !0);
            return;
          }
          var m = a.n;
          if (m && m.b == 8) {
            var l = r(a.g);
            o(a, o(o(new Lh(25), r(r(m).g)), l)), (y.a = !0);
            return;
          }
        }
        break;
      case 7:
        Kc(y, a.g), Gb(a.i) && (ga(a, o(new Lh(3), r(a.g))), (y.a = !0));
        break;
      case 10:
        if (
          (Kc(y, a.i),
          !kb(a) &&
            a.n &&
            a.n.b == 8 &&
            (ga(a.g, r(a.n.g)), r(a.n), (y.a = !0)),
          Ca(a) && Ra(Ca(a)) && (ga(Ca(a), new Lh(25)), (y.a = !0)),
          a.i.b ^ 5)
        ) {
          for (; a.i.g && a.i.i.b == 5; ) r(a.i.i), (y.a = !0);
        } else ga(a.i, new Lh(3)), (y.a = !0);
        break;
      case 11:
        var g = a.e;
        g.p && Jc(y, g.p);
        break;
      case 12:
        if ((Kc(y, a.g.k), a.g.k.k && Kc(y, a.g.k.k), Ra(a.g))) {
          ga(a, r(a.g.k)), (y.a = !0);
          return;
        }
        if (Gb(a.g)) {
          a.g.k.k ? ga(a, r(a.g.k.k)) : r(a), (y.a = !0);
          return;
        }
        if (a.g.k.k && a.g.k.b == 15 && a.g.k.k.b == 15) {
          var i = a.g.k.g,
            n = a.g.k.k.g;
          if (i && n) {
            ga(
              a,
              o(new Lh(15), s(o(o(o(new Lh(22), r(a.g)), r(i)), r(n)), i.f))
            ),
              (y.a = !0);
            return;
          }
        }
        if (a.g.k.k && a.g.k.b == 8 && a.g.k.k.b == 8) {
          var k = a.g.k.g,
            p = a.g.k.k.g;
          if (k.f == p.f) {
            ga(
              a,
              o(new Lh(8), s(o(o(o(new Lh(22), r(a.g)), r(k)), r(p)), k.f))
            ),
              (y.a = !0);
            return;
          }
        }
        if (!a.g.k.k && a.g.k.b == 8) {
          var t = a.g.k.g,
            w = t.b == 52 && t.g.b == 23 && Bd(t.g.e);
          if (t.f == fa || t.f == $ || w) {
            var v = w
              ? Wa(t.g)
              : t.f == fa
              ? s(_(new Lh(30), 0), fa)
              : s(ma(new Lh(29), 0), $);
            ga(a, o(new Lh(8), s(o(o(o(new Lh(22), r(a.g)), r(t)), v), t.f))),
              (y.a = !0);
            return;
          }
        }
        if (!a.g.k.k && a.g.k.b == 12 && !a.g.k.g.k.k) {
          var q = a.g,
            E = a.g.k.g,
            F = a.g.k.g.k;
          H(q, s(o(o(new Lh(46), md(q)), r(E)), Y)), H(a.g.k, r(F)), (y.a = !0);
          return;
        }
        if (pe(a.g.k)) {
          a.g.k.k ? (Hb(a.g), r(a.g.k)) : ga(a, o(new Lh(8), r(a.g))),
            (y.a = !0);
          return;
        }
        if (a.g.k.k && pe(a.g.k.k)) {
          r(a.g.k.k), (y.a = !0);
          return;
        }
        break;
      case 15:
        for (var I = a.n; I && I.b == 12 && !I.g.k.k && I.g.k.b == 15; ) {
          var O = I.g.k.g,
            ha = a.g;
          if (!O || !ha) break;
          ga(
            a,
            o(new Lh(15), s(o(o(o(new Lh(22), r(I.g)), r(O)), r(ha)), O.f))
          ),
            r(I),
            (I = a.n),
            (y.a = !0);
        }
        break;
      case 17:
        for (var M = a.n; M; M = M.n) {
          if (M.b ^ 17) break;
          if (M.g.f == a.g.f && (M.h | 0) == (a.h | 0)) {
            for (; M.i != M.g; ) Fc(a, a.g.k, r(M.i));
            r(M), (y.a = !0);
            return;
          }
          for (var ia = M.g.k; ia; ia = ia.k) {
            var Z = ia.g;
            if (Z && !jd(Z.b)) return;
          }
        }
        break;
      case 19:
        var aa = a.g,
          ea = a.i;
        ga(a, qe(null, r(aa), null, r(ea))), (y.a = !0);
        break;
      case 22:
        var ua = a.g,
          ba = a.g.k,
          ka = a.i;
        if (Ra(ua)) {
          H(a, r(ba)), (y.a = !0);
          return;
        }
        if (Gb(ua)) {
          H(a, r(ka)), (y.a = !0);
          return;
        }
        if (ba.b == ka.b && Cc(ba.b) && oa(ba.g, ka.g) && ba.b ^ 43) {
          var va = ba.g,
            Ta = ba.i,
            la = ka.i,
            rb = o(o(o(new Lh(22), r(ua)), r(Ta)), r(la));
          H(a, o(o(new Lh(ba.b), r(va)), rb)), (y.a = !0);
          return;
        }
        if (ba.b == 52 && oa(ba.g, ka) && na(ka)) {
          var La = ba.g,
            Ua = ba.i,
            wa = o(o(o(new Lh(22), r(ua)), r(Ua)), r(ka));
          H(a, o(o(new Lh(52), r(La)), wa)), (y.a = !0);
          return;
        }
        break;
      case 25:
        for (var xa = a.g, bb = null; xa != a.i; xa = bb)
          (bb = xa.k), na(xa) && (r(xa), (y.a = !0));
        if (a.l.b == 25) {
          me(a), (y.a = !0);
          return;
        }
        if (le(a)) {
          H(a, r(a.g)), (y.a = !0);
          return;
        }
        break;
      case 31:
        var Ia = a.g;
        Ia.b ^ 31
          ? Ia.b ^ 30
            ? Ia.b ^ 29 || Nb(y, a, -Ia.h)
            : Ob(y, a, -(Ia.h | 0) | 0)
          : (H(a, r(Ia.g)), (y.a = !0));
        break;
      case 32:
        var Ja = a.g;
        Ja.b ^ 32 ? Ja.b ^ 28 || T(y, a, !!!Ja.h) : (H(a, r(Ja.g)), (y.a = !0));
        break;
      case 33:
        H(a, r(a.g));
        break;
      case 38:
        var cb = a.g,
          sb = a.i;
        ic(cb, 0)
          ? (H(a, r(sb)), (y.a = !0))
          : ic(sb, 0)
          ? (H(a, r(cb)), (y.a = !0))
          : cb.b == 30 && sb.b == 30
          ? Ob(y, a, ((cb.h | 0) + (sb.h | 0)) | 0)
          : cb.b == 29 && sb.b == 29 && Nb(y, a, cb.h + sb.h);
        break;
      case 20:
        var tb = a.g;
        if (tb.b == 26) {
          var Ub = tb.f;
          if (Ub == fa) {
            var ub = tb.k;
            ub && !ub.k && ub.b == 30 && (H(a, r(ub)), (y.a = !0));
          } else if (Ub == $) {
            var nc = tb.k;
            nc && !nc.k && nc.b == 30 && Nb(y, a, nc.h | 0);
          } else if (da(Ub) == $)
            for (var $a = tb.k; $a; $a = $a.k)
              if ($a.b == 29) {
                var Pc = $a.h,
                  db = Pc | 0;
                Pc == db && Ob(y, $a, db);
              }
        }
        break;
      case 39:
        var eb = a.g,
          vb = a.i;
        ic(vb, 1)
          ? (H(a, r(eb)), (y.a = !0))
          : eb.b == 30 && vb.b == 30
          ? Ob(y, a, vb.h | 0 ? ((eb.h | 0) / (vb.h | 0)) | 0 : 0)
          : eb.b == 29 && vb.b == 29 && Nb(y, a, vb.h != 0 ? eb.h / vb.h : 0);
        break;
      case 40:
        var wb = a.g,
          Vb = a.i;
        oa(wb, Vb) && na(wb)
          ? (T(y, a, !0), (y.a = !0))
          : wb.b == 30 && Vb.b == 30
          ? T(y, a, (wb.h | 0) == (Vb.h | 0))
          : wb.b == 29 && Vb.b == 29 && T(y, a, wb.h == Vb.h);
        break;
      case 41:
        var Bb = a.g,
          Wb = a.i;
        Bb.b == 30 && Wb.b == 30
          ? T(y, a, (Bb.h | 0) > (Wb.h | 0))
          : Bb.b == 29 && Wb.b == 29 && T(y, a, Bb.h > Wb.h);
        break;
      case 42:
        var Cb = a.g,
          fb = a.i;
        Cb.b ^ 30
          ? fb.b ^ 30
            ? Cb.b == 30 && fb.b == 30
              ? T(y, a, (Cb.h | 0) >= (fb.h | 0))
              : Cb.b == 29 && fb.b == 29 && T(y, a, Cb.h >= fb.h)
            : ((a.b = 41), _(fb, ((fb.h | 0) - 1) | 0), (y.a = !0))
          : ((a.b = 41), _(Cb, ((Cb.h | 0) + 1) | 0), (y.a = !0));
        break;
      case 43:
        var Sc = a.g,
          Qc = a.i,
          Tc = Sc.f;
        if (Qc.b == 30) {
          var Rc = Qc.h | 0,
            sc = 0;
          switch (Tc) {
            case Rb:
            case yb:
            case Fa:
              sc = 2;
              break;
            case Sb:
            case zb:
            case Ga:
              sc = 3;
              break;
            case Tb:
            case Ab:
            case Ha:
              sc = 4;
              break;
          }
          Rc > -1 &&
            Rc < sc &&
            (H(a, s(hc(o(new Lh(21), r(Sc)), 'xyzw'[Rc]), a.f)), (y.a = !0));
        }
        break;
      case 44:
        var oc = a.g,
          Ka = a.i;
        oc.b == 30 && Ka.b == 30
          ? T(y, a, (oc.h | 0) < (Ka.h | 0))
          : oc.b == 29 && Ka.b == 29 && T(y, a, oc.h < Ka.h);
        break;
      case 45:
        var gb = a.g,
          Ma = a.i;
        gb.b ^ 30
          ? Ma.b ^ 30
            ? gb.b == 30 && Ma.b == 30
              ? T(y, a, (gb.h | 0) <= (Ma.h | 0))
              : gb.b == 29 && Ma.b == 29 && T(y, a, gb.h <= Ma.h)
            : ((a.b = 44), _(Ma, ((Ma.h | 0) + 1) | 0), (y.a = !0))
          : ((a.b = 44), _(gb, ((gb.h | 0) - 1) | 0), (y.a = !0));
        break;
      case 46:
        var Xb = a.g,
          Yb = a.i;
        Xb.b == 28 && Ra(Xb)
          ? (H(a, r(Yb)), (y.a = !0))
          : Xb.b == 28 && Gb(Xb)
          ? T(y, a, !1)
          : Xb.b == 28 && Yb.b == 28 && T(y, a, !!Xb.h && !!Yb.h);
        break;
      case 47:
        var ac = a.g,
          Uc = a.i;
        ac.b == 28 && Gb(ac)
          ? (H(a, r(Uc)), (y.a = !0))
          : ac.b == 28 && Ra(ac)
          ? T(y, a, !0)
          : ac.b == 28 && Uc.b == 28 && T(y, a, !!ac.h && !!Uc.h);
        break;
      case 48:
        var Vc = a.g,
          Wc = a.i;
        Vc.b == 28 && Wc.b == 28 && T(y, a, !!Vc.h != !!Wc.h);
        break;
      case 49:
        var xb = a.g,
          Zb = a.i;
        xb.b == 30 && (xb.h | 0) == 1
          ? (H(a, r(Zb)), (y.a = !0))
          : Zb.b == 30 && (Zb.h | 0) == 1
          ? (H(a, r(xb)), (y.a = !0))
          : xb.b == 30 && Zb.b == 30
          ? Ob(y, a, sh(xb.h | 0, Zb.h | 0))
          : xb.b == 29 && Zb.b == 29 && Nb(y, a, xb.h * Zb.h);
        break;
      case 50:
        var pc = a.g,
          _b = a.i;
        oa(pc, _b) && na(pc)
          ? (T(y, a, !1), (y.a = !0))
          : pc.b == 30 && _b.b == 30
          ? T(y, a, (pc.h | 0) != (_b.h | 0))
          : pc.b == 29 && _b.b == 29 && T(y, a, pc.h != _b.h);
        break;
      case 51:
        var qc = a.g,
          Db = a.i;
        ic(qc, 0)
          ? (H(a, s(o(new Lh(31), r(Db)), a.f)), (y.a = !0))
          : ic(Db, 0)
          ? (H(a, r(qc)), (y.a = !0))
          : qc.b == 30 && Db.b == 30
          ? Ob(y, a, ((qc.h | 0) - (Db.h | 0)) | 0)
          : qc.b == 29 && Db.b == 29 && Nb(y, a, qc.h - Db.h);
        break;
    }
  }
  function T(c, a, b) {
    H(a, s(s(Ba(new Lh(28), b), Y), Y)), (c.a = !0);
  }
  function Nb(c, a, b) {
    H(a, s(s(ma(new Lh(29), b), $), Y)), (c.a = !0);
  }
  function Ob(c, a, b) {
    H(a, s(s(_(new Lh(30), b), fa), Y)), (c.a = !0);
  }
  function Kc(b, a) {
    a.b == 3 && le(a) && (ga(a, r(a.g)), (b.a = !0));
  }
  function Le(b, a) {
    Na(b.c, a.c, a);
  }
  function Fg(b, a) {
    Na(b.c, a.c, a);
  }
  function xd(c, a) {
    var b = ya(c.c, a, null);
    return b || (c.b && xd(c.b, a));
  }
  function Gg(a) {
    return new Sh(a, 0, a.b.length);
  }
  function Hg(d, a) {
    if ((yd(d), a < 0 || a >= d.d.length)) return '';
    var b = d.d[a],
      c = ((a + 1) | 0) < d.d.length ? (d.d[(a + 1) | 0] - 1) | 0 : d.b.length;
    return d.b.slice(b, c);
  }
  function Pb(h, a) {
    yd(h);
    for (var b = h.d.length, c = 0; b > 0; ) {
      var d = (b / 2) | 0,
        e = (c + d) | 0;
      h.d[e] <= a
        ? ((c = (e + 1) | 0), (b = (((b - d) | 0) - 1) | 0))
        : (b = d);
    }
    var f = c > 0 ? (a - h.d[(c - 1) | 0]) | 0 : a;
    return new Yh((c - 1) | 0, f);
  }
  function Qb(d, a, b) {
    if ((yd(d), a > -1 && a < d.d.length)) {
      var c = d.d[a];
      if (
        b > -1 &&
        ((c + b) | 0) <
          (((a + 1) | 0) < d.d.length ? d.d[(a + 1) | 0] : d.b.length)
      )
        return (c + b) | 0;
    }
    return -1;
  }
  function yd(b) {
    if (!b.d) {
      b.d = [0];
      for (var a = 0, c = b.b.length; a < c; a = (a + 1) | 0)
        b.b.charCodeAt(a) ^ 10 || b.d.push((a + 1) | 0);
    }
  }
  function zd(a) {
    switch (a) {
      case 2:
        return eh;
      case 3:
        return fh;
      case 4:
        return gh;
    }
    return null;
  }
  function Ad(a, b) {
    switch (a) {
      case Y:
        switch (b) {
          case 1:
            return Y;
          case 2:
            return Rb;
          case 3:
            return Sb;
          case 4:
            return Tb;
        }
        break;
      case $:
        switch (b) {
          case 1:
            return $;
          case 2:
            return Fa;
          case 3:
            return Ga;
          case 4:
            return Ha;
        }
        break;
      case fa:
        switch (b) {
          case 1:
            return fa;
          case 2:
            return yb;
          case 3:
            return zb;
          case 4:
            return Ab;
        }
        break;
    }
    return null;
  }
  function Bd(a) {
    return a instanceof Me && (a.v == 0 || a.v == 2);
  }
  function K(a) {
    return a.l || (a.l = new ai(a, null, 0)), a.l;
  }
  function Ig(c, a) {
    if (c.n.length ^ a.n.length) return !1;
    for (var b = 0, d = c.n.length; b < d; b = (b + 1) | 0)
      if (c.n[b].q.f != a.n[b].q.f) return !1;
    return !0;
  }
  function P(a) {
    var b;
    return (b = a.E) && b.g;
  }
  function Lc(a, b, c) {
    for (
      var d = b.b.split(hh),
        e = [],
        f = null,
        h = 0,
        m = 0,
        l = 0,
        q = d.length;
      l < q;
      l = (l + 1) | 0
    ) {
      var g = d[l],
        i = g.length,
        n = (m + i) | 0,
        k = new Sh(b, m, n);
      if (l % 2) {
        var p = g.charCodeAt(0);
        if ((p > 64 && p < 91) || (p > 96 && p < 123) || p == 95) {
          var t = ya(Kg, g, 99);
          t ^ 99
            ? e.push(new $h(k, t, f))
            : Lg.has(g)
            ? Lf(a, k)
            : e.push(new $h(k, 96, f));
        } else if ((p > 47 && p < 58) || (p == 46 && i > 1))
          e.push(new $h(k, ih.test(g) ? 97 : 95, f));
        else if (p ^ 35) {
          if (p ^ 34) {
            var v = ya(jh, g, 99);
            v ^ 99 ||
              (g.startsWith('//')
                ? c ^ 1
                  ? (f || (f = [])).push(k)
                  : (v = 0)
                : g.startsWith('/*') &&
                  (c ^ 1 ? (f || (f = [])).push(k) : (v = 1))),
              v ^ 99 && e.push(new $h(k, v, f));
          } else e.push(new $h(k, 98, f));
        } else {
          var w = 94;
          switch (g) {
            case '#version':
              w = 92;
              break;
            case '#extension':
              w = 91;
              break;
            case '#include':
              w = 93;
              break;
          }
          e.push(new $h(k, w, f));
        }
      } else if (g != '') {
        u(a, k, 'Syntax error "' + g + '"');
        break;
      }
      e.length ^ h && ((f = null), (h = e.length)), (m = n);
    }
    return e.push(new $h(new Sh(b, m, m), 99, f)), e;
  }
  function Ne(a) {
    return a.b ? Ne(a.b) : a;
  }
  function Mg(c, a) {
    c.f || (c.f = new Map());
    var b = ra(c.f, a, null);
    return (
      b || (za(c.f, a, (b = new ai(null, c, a))), (b.d = !0), (b.e = c.e)), b
    );
  }
  function C(a) {
    return a.b ? (a.c ? C(a.b) + '[' + a.c + ']' : C(a.b) + '[]') : a.a.c;
  }
  function Sa(a) {
    switch (a) {
      case Rb:
      case Fa:
      case yb:
      case ob:
        return 2;
      case Sb:
      case Ga:
      case zb:
      case pb:
        return 3;
      case Tb:
      case Ha:
      case Ab:
      case qb:
        return 4;
    }
    return a.c;
  }
  function Dd(a) {
    switch (a) {
      case Rb:
      case Sb:
      case Tb:
        return Y;
      case Fa:
      case Ga:
      case Ha:
        return $;
      case yb:
      case zb:
      case Ab:
        return fa;
      case ob:
        return Fa;
      case pb:
        return Ga;
      case qb:
        return Ha;
    }
    return a.b;
  }
  function Ea(a) {
    switch (a) {
      case Y:
      case $:
      case fa:
        return 1;
      case Rb:
      case Fa:
      case yb:
        return 2;
      case Sb:
      case Ga:
      case zb:
        return 3;
      case Tb:
      case Ha:
      case Ab:
      case ob:
        return 4;
      case pb:
        return 9;
      case qb:
        return 16;
    }
    return 0;
  }
  function da(a) {
    switch (a) {
      case Y:
      case Rb:
      case Sb:
      case Tb:
        return Y;
      case $:
      case Fa:
      case Ga:
      case Ha:
      case ob:
      case pb:
      case qb:
        return $;
      case fa:
      case yb:
      case zb:
      case Ab:
        return fa;
    }
    return null;
  }
  function Ed(a) {
    switch (a) {
      case Rb:
      case Sb:
      case Tb:
      case yb:
      case zb:
      case Ab:
      case Fa:
      case Ga:
      case Ha:
        return !0;
    }
    return !1;
  }
  function _a(a) {
    switch (a) {
      case ob:
      case pb:
      case qb:
        return !0;
    }
    return !1;
  }
  function Mc(a) {
    switch (a) {
      case fa:
      case yb:
      case zb:
      case Ab:
        return !0;
    }
    return !1;
  }
  function Nc(a) {
    switch (a) {
      case $:
      case Fa:
      case Ga:
      case Ha:
        return !0;
      case ob:
      case pb:
      case qb:
        return !0;
    }
    return !1;
  }
  function Ng(a) {
    return Mc(a) || Nc(a);
  }
  function Og(a) {
    return !a.e && !a.d;
  }
  function Oe(a) {
    return (a.e = !0), a;
  }
  function Pe(b) {
    var a = b.a.length;
    return b.a.push(a), a;
  }
  function Fd(c, a, b) {
    c.a[Oc(c, a)] = Oc(c, b);
  }
  function Oc(c, a) {
    var b = c.a[a];
    return b ^ a && ((b = Oc(c, b)), (c.a[a] = b)), b;
  }
  function qa(a, b) {
    Qe(a), process.stdout.write(b), Qe(0);
  }
  function Sg(a) {
    qa(3, 'error: '), qa(1, a + '\n');
  }
  function Tg(a) {
    qa(2, 'note: '), qa(1, a + '\n');
  }
  function Ug(a) {
    qa(7, 'warning: '), qa(1, a + '\n');
  }
  function Re(a) {
    for (
      var b = process.stdout.columns, l = 0, g = a.a, i = g.length;
      l < i;
      l = (l + 1) | 0
    ) {
      var c = g[l];
      c.b && qa(1, rd(c.b) + ': ');
      switch (c.a) {
        case 1:
          Ug(c.c);
          break;
        case 0:
          Sg(c.c);
          break;
      }
      if (c.b) {
        var d = sd(c.b, b);
        qa(2, d.a + '\n'), qa(4, d.b + '\n');
      }
      if (c.d) {
        qa(1, rd(c.d) + ': '), Tg(c.e);
        var e = sd(c.d, b);
        qa(2, e.a + '\n'), qa(4, e.b + '\n');
      }
    }
    var f = a.d != 0,
      h = a.c != 0,
      m = '';
    h && ((m += a.c + ' warning' + (a.c ^ 1 ? 's' : '')), f && (m += ' and ')),
      f && (m += a.d + ' error' + (a.d ^ 1 ? 's' : '')),
      (h || f) && process.stdout.write(m + ' generated\n');
  }
  function Se(a) {
    if (th(a)) return [new Zh('<stdin>', a)];
    if (a instanceof Array) {
      for (var b = [], c = 0, e = a.length; c < e; c = (c + 1) | 0) {
        var d = a[c];
        b.push(new Zh(uh(d.name), uh(d.contents)));
      }
      return b;
    }
    return [new Zh(uh(a.name), uh(a.contents))];
  }
  function Te(a) {
    return function (b, c) {
      var d = a(b, c);
      if (th(d)) return new Zh(b, d);
      if (!d) return null;
      var e = d.name,
        f = d.contents;
      if (th(e) && th(f)) return new Zh(e, f);
      throw new Error('Invalid file access result');
    };
  }
  function Vg() {
    var a = process.argv.slice(2),
      b = new vh(),
      c = [],
      d = 0,
      e = null,
      f = require('fs'),
      h = require('path');
    b.e = function (m, l) {
      var g = h.resolve(h.dirname(l), m);
      try {
        return new Zh(g, f.readFileSync(g, 'utf8'));
      } catch (q) {}
      return null;
    };
    for (var w = 0, v = a.length; w < v; w = (w + 1) | 0) {
      var i = a[w];
      if (i.startsWith('-'))
        switch (i) {
          case '--disable-rewriting':
            b.a = !1;
            break;
          case '--pretty-print':
            b.b = !1;
            break;
          case '--keep-symbols':
            b.d = !1;
            break;
          case '--help':
          case '-h':
            console.log(
              "\nUsage: glslx [sources] [flags]\n\n  --output=PATH\n    Set the path to the output file. Defaults to standard out.\n\n  --format=FORMAT\n    Set the output format, must be json, js, c++, skew or rust. Defaults to json.\n\nAdvanced:\n\n  --disable-rewriting\n    Disable syntax tree rewriting, useful to check for driver bugs.\n\n  --pretty-print\n    Format the output nicely instead of minifying it.\n\n  --renaming=MODE\n    Valid modes are all, internal-only, or none. Defaults to all.\n\n  --keep-symbols\n    Don't inline constants or remove unused symbols.\n"
            );
            return;
          default:
            if (i.startsWith('--output=')) e = i.slice(9);
            else if (i.startsWith('--format=')) {
              var n = i.slice(9);
              We.has(n) ||
                (console.log('invalid output format "' + n + '"'),
                process.exit(1)),
                (d = We.get(n));
            } else if (i.startsWith('--renaming=')) {
              var k = i.slice(11);
              Xe.has(k) ||
                (console.log('invalid symbol renaming mode "' + k + '"'),
                process.exit(1)),
                (b.c = Xe.get(k));
            } else console.log('invalid flag "' + i + '"'), process.exit(1);
            break;
        }
      else c.push(new Zh(h.resolve(i), f.readFileSync(i, 'utf8')));
    }
    if (c.length) {
      var p = new Kh(),
        t = Md(p, c, b);
      t
        ? e != null
          ? (f.writeFileSync(e, Zc(t, d)), Re(p))
          : process.stdout.write(Zc(t, d))
        : (Re(p), process.exit(1));
    } else
      console.log(
        "\nUsage: glslx [sources] [flags]\n\n  --output=PATH\n    Set the path to the output file. Defaults to standard out.\n\n  --format=FORMAT\n    Set the output format, must be json, js, c++, skew or rust. Defaults to json.\n\nAdvanced:\n\n  --disable-rewriting\n    Disable syntax tree rewriting, useful to check for driver bugs.\n\n  --pretty-print\n    Format the output nicely instead of minifying it.\n\n  --renaming=MODE\n    Valid modes are all, internal-only, or none. Defaults to all.\n\n  --keep-symbols\n    Don't inline constants or remove unused symbols.\n"
      );
  }
  function ci() {
    var a = (function () {
        return window;
      })(),
      b = typeof exports !== 'undefined' ? exports : (a.GLSLX = {});
    (b.compile = lh),
      (b.compileIDE = mh),
      (b.format = nh),
      typeof require !== 'undefined' &&
        typeof module !== 'undefined' &&
        require.main === module &&
        Vg();
  }
  function jd(a) {
    return a > 27 && a < 31;
  }
  function kd(a) {
    return a > 30 && a < 38;
  }
  function Vf(a) {
    return a > 30 && a < 36;
  }
  function ld(a) {
    return a > 33 && a < 38;
  }
  function Cc(a) {
    return a > 37 && a < 57;
  }
  function Dc(a) {
    return a > 51 && a < 57;
  }
  function Wf(a) {
    return a == 4 || a == 5 || a == 6 || a == 15;
  }
  function ie(a) {
    return a == 7 || a == 10 || a == 19;
  }
  function Za(b) {
    var a = '';
    return (
      b & 1 && (a += 'attribute '),
      b & 2 && (a += 'const '),
      b & 256 && (a += 'uniform '),
      b & 512 && (a += 'varying '),
      b & 4 && (a += 'highp '),
      b & 32 && (a += 'lowp '),
      b & 64 && (a += 'mediump '),
      b & 8 && (a += 'in '),
      b & 16 && (a += 'inout '),
      b & 128 && (a += 'out '),
      a
    );
  }
  function Jg(a) {
    return a > 49 && a < 80;
  }
  function Cd(a) {
    switch (a) {
      case 96:
      case 42:
      case 33:
      case 34:
      case 14:
      case 39:
      case 40:
      case 41:
      case 20:
      case 22:
      case 23:
      case 24:
      case 3:
      case 5:
      case 6:
      case 7:
      case 26:
      case 27:
      case 28:
        return !0;
    }
    return !1;
  }
  function Qe(a) {
    process.stdout.isTTY && process.stdout.write('\x1B[0;' + kh.get(a) + 'm');
  }
  function hb(b, a) {
    return (b[(b.length - 1) | 0] = a);
  }
  function Yc(a) {
    return a[(a.length - 1) | 0];
  }
  function bf(c, a) {
    for (var d = 0, e = a.length; d < e; d = (d + 1) | 0) {
      var b = a[d];
      c.push(b);
    }
  }
  function Eb(d, a) {
    for (var b = 0, c = 0, e = d.length; c < e; c = (c + 1) | 0)
      a(d[c]) || (b < c && (d[b] = d[c]), (b = (b + 1) | 0));
    for (; b < d.length; ) d.pop();
  }
  function Na(c, a, b) {
    return c.set(a, b), b;
  }
  function j(c, a, b) {
    return c.set(a, b), c;
  }
  function ya(d, a, b) {
    var c = d.get(a);
    return c !== void 0 ? c : b;
  }
  function za(c, a, b) {
    return c.set(a, b), b;
  }
  function Oa(c, a, b) {
    return c.set(a, b), c;
  }
  function ra(d, a, b) {
    var c = d.get(a);
    return c !== void 0 ? c : b;
  }
  function Xc(b, a) {
    return (((a < b) | 0) - ((a > b) | 0)) | 0;
  }
  function tc(a) {
    for (var b = new ph(), d = 0, e = a.length; d < e; d = (d + 1) | 0) {
      var c = a[d];
      b.a += _e(c);
    }
    return b.a;
  }
  function af(b, a) {
    return (((a < b) | 0) - ((a > b) | 0)) | 0;
  }
  function bc(d, a) {
    for (var b = '', c = 0; c < a; c = (c + 1) | 0) b += d;
    return b;
  }
  function _e(a) {
    return a < 65536
      ? String.fromCharCode(a)
      : String.fromCharCode((((a - 65536) >> 10) + 55296) | 0) +
          String.fromCharCode((((a - 65536) & 1023) + 56320) | 0);
  }
  function rc(a) {
    if (!a) return null;
    var b = a.a,
      c = Pb(b, a.b),
      d = Pb(b, a.c);
    return {
      source: b.a,
      start: { line: c.a, column: c.b },
      end: { line: d.a, column: d.b },
    };
  }
  function lh(a, b) {
    b = b || {};
    var c = Se(a),
      d = new Kh(),
      e = new vh();
    (e.c = ya(Xe, b.renaming, 0)),
      b.disableRewriting && (e.a = !1),
      b.prettyPrint && (e.b = !1),
      b.keepSymbols && (e.d = !1),
      b.fileAccess && (e.e = Te(b.fileAccess));
    var f = Md(d, c, e);
    return { log: Jf(d), output: f ? Zc(f, ya(We, b.format, 0)) : null };
  }
  function mh(a, b) {
    b = b || {};
    var c = Se(a),
      d = new Kh(),
      e = new vh();
    b.fileAccess && (e.e = Te(b.fileAccess));
    var f = cf(d, c, e),
      h = function (m) {
        for (
          var Wc,
            l = m.source + '',
            g = m.line | 0,
            i = m.column | 0,
            n = !!m.ignoreDiagnostics,
            k = null,
            p = null,
            t = null,
            _b = 0,
            qc = c.length;
          _b < qc;
          _b = (_b + 1) | 0
        ) {
          var w = c[_b];
          if (w.a == l) {
            var v = Qb(w, g, i);
            if (~v) {
              if (!n && d)
                for (
                  var xb = 0, Zb = d.a, pc = Zb.length;
                  xb < pc;
                  xb = (xb + 1) | 0
                ) {
                  var q = Zb[xb];
                  if (q.b && q.b.a == w && lc(q.b, v)) {
                    (p = new Bh(q.c, '')), (k = q.b);
                    break;
                  }
                }
              if (!p && f) {
                var E = new Ch(w, v);
                Pa(E, f.a),
                  (p = Cf(E)),
                  p && ((k = E.e), (t = (Wc = E.d) && Wc.c));
              }
            }
            break;
          }
        }
        return {
          tooltip: p && p.a,
          range: rc(k),
          symbol: t,
          documentation: p && p.b,
        };
      },
      F = function (I) {
        for (
          var O = I.source + '',
            ha = I.line | 0,
            M = I.column | 0,
            ia = null,
            Z = null,
            aa = null,
            Db = 0,
            y = f.b,
            Xg = y.length;
          Db < Xg;
          Db = (Db + 1) | 0
        ) {
          var ea = y[Db];
          if (ea.a.a.a == O) {
            var ua = Qb(ea.a.a, ha, M);
            if (~ua && lc(ea.a, ua))
              return {
                definition: rc(ea.b),
                range: rc(ea.a),
                symbol: ea.b.a.a,
              };
          }
        }
        for (var Hd = 0, Yg = c.length; Hd < Yg; Hd = (Hd + 1) | 0) {
          var ba = c[Hd];
          if (ba.a == O) {
            var ka = Qb(ba, ha, M);
            if (~ka && f) {
              var va = new Ch(ba, ka);
              Pa(va, f.a),
                va.d &&
                  va.d.b &&
                  va.d.b.a.a != '<api>' &&
                  ((Z = va.d.b), (ia = va.e), (aa = va.d.c));
            }
            break;
          }
        }
        return { definition: rc(Z), range: rc(ia), symbol: aa };
      },
      Ta = function (la) {
        for (
          var rb = la.source + '', La = null, Id = 0, Zg = c.length;
          Id < Zg;
          Id = (Id + 1) | 0
        ) {
          var Ua = c[Id];
          if (Ua.a == rb) {
            if (f) {
              var wa = new Dh(Ua);
              be(wa, f.a),
                (La = wa.b.map(function (xa) {
                  return {
                    name: xa.c,
                    kind:
                      xa instanceof Me
                        ? 'variable'
                        : xa instanceof mc
                        ? 'function'
                        : xa instanceof $b
                        ? 'struct'
                        : null,
                    range: rc(xa.b),
                  };
                }));
            }
            break;
          }
        }
        return { symbols: La };
      },
      bb = function (Ia) {
        for (
          var Ja = Ia.source + '',
            cb = Ia.line | 0,
            sb = Ia.column | 0,
            tb = null,
            Ub = null,
            Jd = 0,
            _g = c.length;
          Jd < _g;
          Jd = (Jd + 1) | 0
        ) {
          var ub = c[Jd];
          if (ub.a == Ja) {
            var nc = Qb(ub, cb, sb);
            if (~nc && f) {
              var $a = new Eh(ub, nc);
              Ff($a, f.a),
                $a.d &&
                  $a.d.b &&
                  $a.d.b.a.a != '<api>' &&
                  ((tb = $a.c.map(rc)), (Ub = $a.d.c));
            }
            break;
          }
        }
        return { ranges: tb, symbol: Ub };
      },
      Pc = function (db) {
        for (
          var eb = db.source + '',
            vb = db.line | 0,
            wb = db.column | 0,
            Vb = [],
            Kd = 0,
            $g = c.length;
          Kd < $g;
          Kd = (Kd + 1) | 0
        ) {
          var Bb = c[Kd];
          if (Bb.a == eb) {
            var Wb = Qb(Bb, vb, wb);
            if (~Wb && f) {
              var Cb = new Gh(Bb, Wb);
              If(Cb, f.a),
                (Vb = Cb.d.map(function (fb) {
                  return {
                    kind: fb.a,
                    name: fb.b,
                    detail: fb.c,
                    documentation: fb.d,
                  };
                }));
            }
          }
        }
        return { completions: Vb };
      },
      Sc = function (Qc) {
        for (
          var Tc = Qc.source + '',
            Rc = Qc.line | 0,
            sc = Qc.column | 0,
            oc = [],
            Ka = -1,
            gb = -1,
            Ld = 0,
            ah = c.length;
          Ld < ah;
          Ld = (Ld + 1) | 0
        ) {
          var Ma = c[Ld];
          if (Ma.a == Tc) {
            var Xb = Qb(Ma, Rc, sc);
            if (~Xb && f) {
              var Yb = new Ih(Ma, Xb);
              hd(Yb, f.a),
                (Ka = Yb.d),
                (gb = Yb.e),
                (oc = Yb.c.map(function (ac) {
                  return { text: ac.a, arguments: ac.b, documentation: ac.c };
                }));
            }
          }
        }
        return { signatures: oc, activeArgument: Ka, activeSignature: gb };
      };
    return {
      unusedSymbols: d.b.map(function (Uc) {
        return { name: Uc.c, range: rc(Uc.b) };
      }),
      diagnostics: d.a.map(function (Vc) {
        return { kind: oh[Vc.a].toLowerCase(), range: rc(Vc.b), text: Vc.c };
      }),
      tooltipQuery: h,
      definitionQuery: F,
      symbolsQuery: Ta,
      renameQuery: bb,
      completionQuery: Pc,
      signatureQuery: Sc,
    };
  }
  function nh(a, b) {
    b = b || {};
    var c = 'indent' in b ? uh(b.indent) : '  ',
      d = 'newline' in b ? uh(b.newline) : '\n',
      e = 2;
    if ('trailingNewline' in b) {
      var f = uh(b.trailingNewline);
      switch (f) {
        case 'preserve':
          e = 0;
          break;
        case 'remove':
          e = 1;
          break;
        case 'insert':
          e = 2;
          break;
        default:
          throw new Error('Invalid "trailingNewline" value: ' + f);
      }
    }
    return Bf(uh(a), c, d, e);
  }
  function ph() {
    this.a = '';
  }
  function qh() {
    (this.a = ''), (this.b = 0), (this.c = 0);
  }
  function vh() {
    (this.a = !0), (this.b = !0), (this.c = 0), (this.d = !0), (this.e = null);
  }
  function wh(a) {
    (this.a = new Map()), (this.b = a), (this.c = 0);
  }
  function xh(a, b) {
    (this.a = a), (this.b = b);
  }
  function yh(a, b) {
    (this.a = a), (this.b = b);
  }
  function zh() {
    (this.a = []), (this.b = []);
  }
  function Ah(a, b) {
    (this.a = ''),
      (this.b = ''),
      (this.c = '\n'),
      (this.d = ' '),
      (this.e = b.b),
      this.e && ((this.d = ''), (this.c = ''));
    for (var c = null, d = a.g; d; d = d.k)
      jf(this, d) ||
        (c && hf(c, d) && (this.a += this.c),
        Va(this, d),
        (this.a += this.c),
        (c = d));
  }
  function Bh(a, b) {
    (this.a = a), (this.b = b);
  }
  function Ch(a, b) {
    (this.a = a),
      (this.b = b),
      (this.c = null),
      (this.d = null),
      (this.e = null),
      (this.f = null),
      (this.h = null);
  }
  function Dh(a) {
    (this.a = a), (this.b = []);
  }
  function Eh(a, b) {
    (this.a = a), (this.b = b), (this.c = []), (this.d = null);
  }
  function Fh(a, b) {
    (this.a = a), (this.b = b), (this.c = ''), (this.d = '');
  }
  function Gh(a, b) {
    (this.a = a), (this.b = b), (this.c = new Map()), (this.d = []);
  }
  function Hh(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c);
  }
  function Ih(a, b) {
    (this.a = a), (this.b = b), (this.c = []), (this.d = -1), (this.e = -1);
  }
  function Jh(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c), (this.d = null), (this.e = '');
  }
  function Kh() {
    (this.a = []), (this.b = []), (this.c = 0), (this.d = 0), (this.e = null);
  }
  function Lh(a) {
    (this.a = re()),
      (this.b = a),
      (this.c = null),
      (this.d = null),
      (this.e = null),
      (this.f = null),
      (this.h = 0),
      (this.m = null),
      (this.l = null),
      (this.g = null),
      (this.i = null),
      (this.n = null),
      (this.k = null),
      (this.p = !1);
  }
  function Mh(a) {
    this.a = a;
  }
  function Nh(a, b) {
    (this.a = a), (this.b = b);
  }
  function Oh(a, b, c, d, e) {
    (this.a = a),
      (this.b = b),
      (this.c = c),
      (this.d = d),
      (this.e = e),
      (this.f = []),
      (this.h = 0),
      (this.m = 0),
      (this.l = null);
  }
  function Ph(a) {
    (this.a = a), (this.b = null), (this.c = null);
  }
  function Qh() {
    this.a = new Map();
  }
  function Rh(a, b) {
    (this.a = a), (this.b = b);
  }
  function Sh(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c);
  }
  function Uh(a, b) {
    (this.a = a),
      (this.b = b),
      (this.c = new Map()),
      (this.d = 0),
      (this.e = !1);
  }
  function Th(a) {
    (this.a = a),
      (this.b = []),
      (this.c = []),
      (this.d = new Map()),
      (this.e = new bi()),
      (this.f = new bi()),
      (this.h = 0),
      (this.m = 0),
      (this.l = -1);
  }
  function Vh(a, b) {
    (this.a = a),
      (this.b = b),
      (this.c = new zh()),
      (this.d = []),
      (this.e = new Map()),
      (this.f = null);
  }
  function Wh() {
    (this.a = !1),
      (this.b = []),
      (this.c = new Map()),
      (this.d = new Map()),
      (this.e = new Map());
  }
  function Xh(a, b) {
    (this.a = a), (this.b = b), (this.c = new Map());
  }
  function Yh(a, b) {
    (this.a = a), (this.b = b);
  }
  function Zh(a, b) {
    (this.a = a), (this.b = b), (this.c = null), (this.d = null);
  }
  function _h(a, b, c, d) {
    (this.a = a),
      (this.b = b),
      (this.c = c),
      (this.d = d),
      (this.e = 0),
      (this.f = null),
      (this.h = null),
      (this.m = null),
      (this.l = null),
      (this.g = 0);
  }
  function $b(a, b, c, d) {
    _h.call(this, a, b, c, d), (this.i = []);
  }
  rh($b, _h);
  function mc(a, b, c, d) {
    _h.call(this, a, b, c, d),
      (this.n = []),
      (this.k = null),
      (this.p = null),
      (this.t = null),
      (this.w = null);
  }
  rh(mc, _h);
  function Me(a, b, c, d, e) {
    _h.call(this, a, b, c, d),
      (this.v = e),
      (this.q = null),
      (this.E = null),
      (this.F = null);
  }
  rh(Me, _h);
  function $h(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c);
  }
  function ai(a, b, c) {
    (this.a = a),
      (this.b = b),
      (this.c = c),
      (this.d = !1),
      (this.e = !1),
      (this.f = null);
  }
  function bi() {
    this.a = [];
  }
  var bh = new qh(),
    Ve = 0,
    ab = null,
    eg = j(
      j(j(j(new Map(), 'disable', 1), 'enable', 2), 'require', 3),
      'warn',
      4
    ),
    dh = j(
      j(
        j(
          j(new Map(), 'GL_OES_standard_derivatives', 0),
          'GL_EXT_frag_depth',
          0
        ),
        'GL_EXT_draw_buffers',
        0
      ),
      'GL_EXT_shader_texture_lod',
      0
    ),
    eh = ['xy', 'st', 'rg'],
    fh = ['xyz', 'stp', 'rgb'],
    gh = ['xyzw', 'stpq', 'rgba'],
    hh = new RegExp(
      '(\\.[0-9]+[eE][+-]?[0-9]+\\b|\\.[0-9]+\\b|[0-9]+\\.[0-9]+[eE][+-]?[0-9]+\\b|[0-9]+\\.[0-9]+\\b|[0-9]+\\.[eE][+-]?[0-9]+\\b|[0-9]+\\.|[0-9]+[eE][+-]?[0-9]+\\b|[1-9][0-9]*\\b|0[0-7]*\\b|0[xX][0-9A-Fa-f]+\\b|[ \t\r\n]|/\\*(?:.|\r\n|\n)*?\\*/|//.*|&&|\\|\\||\\^\\^|\\+\\+|--|<<=?|>>=?|[()[\\]{}\\.,?:;]|[+\\-*/%=!<>&|^~]=?|[A-Za-z_][A-Za-z0-9_]*\\b|#\\w+\\b|"(?:[^"\\\\]|\\\\.)*")'
    ),
    ih = new RegExp('^([1-9][0-9]*|0[0-7]*|0[xX][0-9A-Fa-f]+)$'),
    Kg = j(
      j(
        j(
          j(
            j(
              j(
                j(
                  j(
                    j(
                      j(
                        j(
                          j(
                            j(
                              j(
                                j(
                                  j(
                                    j(
                                      j(
                                        j(
                                          j(
                                            j(
                                              j(
                                                j(
                                                  j(
                                                    j(
                                                      j(
                                                        j(
                                                          j(
                                                            j(
                                                              j(
                                                                j(
                                                                  j(
                                                                    j(
                                                                      j(
                                                                        j(
                                                                          j(
                                                                            j(
                                                                              j(
                                                                                j(
                                                                                  j(
                                                                                    j(
                                                                                      j(
                                                                                        j(
                                                                                          j(
                                                                                            new Map(),
                                                                                            'attribute',
                                                                                            2
                                                                                          ),
                                                                                          'bool',
                                                                                          3
                                                                                        ),
                                                                                        'break',
                                                                                        4
                                                                                      ),
                                                                                      'bvec2',
                                                                                      5
                                                                                    ),
                                                                                    'bvec3',
                                                                                    6
                                                                                  ),
                                                                                  'bvec4',
                                                                                  7
                                                                                ),
                                                                                'const',
                                                                                8
                                                                              ),
                                                                              'continue',
                                                                              9
                                                                            ),
                                                                            'discard',
                                                                            10
                                                                          ),
                                                                          'do',
                                                                          11
                                                                        ),
                                                                        'else',
                                                                        12
                                                                      ),
                                                                      'false',
                                                                      13
                                                                    ),
                                                                    'float',
                                                                    14
                                                                  ),
                                                                  'for',
                                                                  15
                                                                ),
                                                                'highp',
                                                                16
                                                              ),
                                                              'if',
                                                              17
                                                            ),
                                                            'in',
                                                            18
                                                          ),
                                                          'inout',
                                                          19
                                                        ),
                                                        'int',
                                                        20
                                                      ),
                                                      'invariant',
                                                      21
                                                    ),
                                                    'ivec2',
                                                    22
                                                  ),
                                                  'ivec3',
                                                  23
                                                ),
                                                'ivec4',
                                                24
                                              ),
                                              'lowp',
                                              25
                                            ),
                                            'mat2',
                                            26
                                          ),
                                          'mat3',
                                          27
                                        ),
                                        'mat4',
                                        28
                                      ),
                                      'mediump',
                                      29
                                    ),
                                    'out',
                                    30
                                  ),
                                  'precision',
                                  31
                                ),
                                'return',
                                32
                              ),
                              'sampler2D',
                              33
                            ),
                            'samplerCube',
                            34
                          ),
                          'struct',
                          35
                        ),
                        'true',
                        36
                      ),
                      'uniform',
                      37
                    ),
                    'varying',
                    38
                  ),
                  'vec2',
                  39
                ),
                'vec3',
                40
              ),
              'vec4',
              41
            ),
            'void',
            42
          ),
          'while',
          43
        ),
        'export',
        44
      ),
      'import',
      45
    ),
    jh = j(
      j(
        j(
          j(
            j(
              j(
                j(
                  j(
                    j(
                      j(
                        j(
                          j(
                            j(
                              j(
                                j(
                                  j(
                                    j(
                                      j(
                                        j(
                                          j(
                                            j(
                                              j(
                                                j(
                                                  j(
                                                    j(
                                                      j(
                                                        j(
                                                          j(
                                                            j(
                                                              j(
                                                                j(
                                                                  j(
                                                                    j(
                                                                      j(
                                                                        j(
                                                                          j(
                                                                            j(
                                                                              j(
                                                                                j(
                                                                                  j(
                                                                                    j(
                                                                                      j(
                                                                                        j(
                                                                                          j(
                                                                                            j(
                                                                                              new Map(),
                                                                                              '~',
                                                                                              46
                                                                                            ),
                                                                                            '--',
                                                                                            47
                                                                                          ),
                                                                                          '++',
                                                                                          48
                                                                                        ),
                                                                                        '!',
                                                                                        49
                                                                                      ),
                                                                                      '&',
                                                                                      50
                                                                                    ),
                                                                                    '|',
                                                                                    51
                                                                                  ),
                                                                                  '^',
                                                                                  52
                                                                                ),
                                                                                '/',
                                                                                53
                                                                              ),
                                                                              '==',
                                                                              54
                                                                            ),
                                                                            '>',
                                                                            55
                                                                          ),
                                                                          '>=',
                                                                          56
                                                                        ),
                                                                        '<',
                                                                        57
                                                                      ),
                                                                      '<=',
                                                                      58
                                                                    ),
                                                                    '&&',
                                                                    59
                                                                  ),
                                                                  '||',
                                                                  60
                                                                ),
                                                                '^^',
                                                                61
                                                              ),
                                                              '-',
                                                              62
                                                            ),
                                                            '*',
                                                            63
                                                          ),
                                                          '!=',
                                                          64
                                                        ),
                                                        '+',
                                                        65
                                                      ),
                                                      '%',
                                                      66
                                                    ),
                                                    '<<',
                                                    67
                                                  ),
                                                  '>>',
                                                  68
                                                ),
                                                '=',
                                                69
                                              ),
                                              '+=',
                                              70
                                            ),
                                            '&=',
                                            71
                                          ),
                                          '|=',
                                          72
                                        ),
                                        '^=',
                                        73
                                      ),
                                      '/=',
                                      74
                                    ),
                                    '*=',
                                    75
                                  ),
                                  '%=',
                                  76
                                ),
                                '<<=',
                                77
                              ),
                              '>>=',
                              78
                            ),
                            '-=',
                            79
                          ),
                          ':',
                          80
                        ),
                        ',',
                        81
                      ),
                      '.',
                      82
                    ),
                    '{',
                    83
                  ),
                  '[',
                  84
                ),
                '(',
                85
              ),
              '?',
              86
            ),
            '}',
            87
          ),
          ']',
          88
        ),
        ')',
        89
      ),
      ';',
      90
    ),
    Lg = j(
      j(
        j(
          j(
            j(
              j(
                j(
                  j(
                    j(
                      j(
                        j(
                          j(
                            j(
                              j(
                                j(
                                  j(
                                    j(
                                      j(
                                        j(
                                          j(
                                            j(
                                              j(
                                                j(
                                                  j(
                                                    j(
                                                      j(
                                                        j(
                                                          j(
                                                            j(
                                                              j(
                                                                j(
                                                                  j(
                                                                    j(
                                                                      j(
                                                                        j(
                                                                          j(
                                                                            j(
                                                                              j(
                                                                                j(
                                                                                  j(
                                                                                    j(
                                                                                      j(
                                                                                        j(
                                                                                          j(
                                                                                            j(
                                                                                              j(
                                                                                                j(
                                                                                                  j(
                                                                                                    j(
                                                                                                      new Map(),
                                                                                                      'asm',
                                                                                                      0
                                                                                                    ),
                                                                                                    'cast',
                                                                                                    0
                                                                                                  ),
                                                                                                  'class',
                                                                                                  0
                                                                                                ),
                                                                                                'default',
                                                                                                0
                                                                                              ),
                                                                                              'double',
                                                                                              0
                                                                                            ),
                                                                                            'dvec2',
                                                                                            0
                                                                                          ),
                                                                                          'dvec3',
                                                                                          0
                                                                                        ),
                                                                                        'dvec4',
                                                                                        0
                                                                                      ),
                                                                                      'enum',
                                                                                      0
                                                                                    ),
                                                                                    'extern',
                                                                                    0
                                                                                  ),
                                                                                  'external',
                                                                                  0
                                                                                ),
                                                                                'fixed',
                                                                                0
                                                                              ),
                                                                              'flat',
                                                                              0
                                                                            ),
                                                                            'fvec2',
                                                                            0
                                                                          ),
                                                                          'fvec3',
                                                                          0
                                                                        ),
                                                                        'fvec4',
                                                                        0
                                                                      ),
                                                                      'goto',
                                                                      0
                                                                    ),
                                                                    'half',
                                                                    0
                                                                  ),
                                                                  'hvec2',
                                                                  0
                                                                ),
                                                                'hvec3',
                                                                0
                                                              ),
                                                              'hvec4',
                                                              0
                                                            ),
                                                            'inline',
                                                            0
                                                          ),
                                                          'input',
                                                          0
                                                        ),
                                                        'interface',
                                                        0
                                                      ),
                                                      'long',
                                                      0
                                                    ),
                                                    'namespace',
                                                    0
                                                  ),
                                                  'noinline',
                                                  0
                                                ),
                                                'output',
                                                0
                                              ),
                                              'packed',
                                              0
                                            ),
                                            'public',
                                            0
                                          ),
                                          'sampler1D',
                                          0
                                        ),
                                        'sampler1DShadow',
                                        0
                                      ),
                                      'sampler2DRect',
                                      0
                                    ),
                                    'sampler2DRectShadow',
                                    0
                                  ),
                                  'sampler2DShadow',
                                  0
                                ),
                                'sampler3D',
                                0
                              ),
                              'sampler3DRect',
                              0
                            ),
                            'short',
                            0
                          ),
                          'sizeof',
                          0
                        ),
                        'static',
                        0
                      ),
                      'superp',
                      0
                    ),
                    'switch',
                    0
                  ),
                  'template',
                  0
                ),
                'this',
                0
              ),
              'typedef',
              0
            ),
            'union',
            0
          ),
          'unsigned',
          0
        ),
        'using',
        0
      ),
      'volatile',
      0
    ),
    Y = K(new $b(-1, null, 'bool', null)),
    Rb = K(new $b(-2, null, 'bvec2', null)),
    Sb = K(new $b(-3, null, 'bvec3', null)),
    Tb = K(new $b(-4, null, 'bvec4', null)),
    L = K(new $b(-5, null, '<error>', null)),
    $ = K(new $b(-6, null, 'float', null)),
    fa = K(new $b(-7, null, 'int', null)),
    yb = K(new $b(-8, null, 'ivec2', null)),
    zb = K(new $b(-9, null, 'ivec3', null)),
    Ab = K(new $b(-10, null, 'ivec4', null)),
    ob = K(new $b(-11, null, 'mat2', null)),
    pb = K(new $b(-12, null, 'mat3', null)),
    qb = K(new $b(-13, null, 'mat4', null)),
    Pg = Oe(K(new $b(-14, null, 'sampler2D', null))),
    Qg = Oe(K(new $b(-15, null, 'samplerCube', null))),
    Fa = K(new $b(-16, null, 'vec2', null)),
    Ga = K(new $b(-17, null, 'vec3', null)),
    Ha = K(new $b(-18, null, 'vec4', null)),
    Gd = K(new $b(-19, null, 'void', null)),
    Rg = [Y, Rb, Sb, Tb, $, fa, yb, zb, Ab, ob, pb, qb, Pg, Qg, Fa, Ga, Ha],
    We = j(
      j(j(j(j(new Map(), 'json', 0), 'js', 1), 'c++', 2), 'skew', 3),
      'rust',
      4
    ),
    Xe = j(j(j(new Map(), 'all', 0), 'internal-only', 1), 'none', 2),
    oh = ['ERROR', 'WARNING'],
    Wg = [
      'GLOBAL',
      'STRUCT_BLOCK',
      'VARIABLE',
      'BLOCK',
      'BREAK',
      'CONTINUE',
      'DISCARD',
      'DO_WHILE',
      'EXPRESSION',
      'EXTENSION',
      'FOR',
      'FUNCTION',
      'IF',
      'MODIFIER_BLOCK',
      'PRECISION',
      'RETURN',
      'STRUCT',
      'VARIABLES',
      'VERSION',
      'WHILE',
      'CALL',
      'DOT',
      'HOOK',
      'NAME',
      'PARSE_ERROR',
      'SEQUENCE',
      'TYPE',
      'UNKNOWN_CONSTANT',
      'BOOL',
      'FLOAT',
      'INT',
      'NEGATIVE',
      'NOT',
      'POSITIVE',
      'PREFIX_DECREMENT',
      'PREFIX_INCREMENT',
      'POSTFIX_DECREMENT',
      'POSTFIX_INCREMENT',
      'ADD',
      'DIVIDE',
      'EQUAL',
      'GREATER_THAN',
      'GREATER_THAN_OR_EQUAL',
      'INDEX',
      'LESS_THAN',
      'LESS_THAN_OR_EQUAL',
      'LOGICAL_AND',
      'LOGICAL_OR',
      'LOGICAL_XOR',
      'MULTIPLY',
      'NOT_EQUAL',
      'SUBTRACT',
      'ASSIGN',
      'ASSIGN_ADD',
      'ASSIGN_DIVIDE',
      'ASSIGN_MULTIPLY',
      'ASSIGN_SUBTRACT',
    ],
    Ue = [
      'SINGLE_LINE_COMMENT',
      'MULTI_LINE_COMMENT',
      'ATTRIBUTE',
      'BOOL',
      'BREAK',
      'BVEC2',
      'BVEC3',
      'BVEC4',
      'CONST',
      'CONTINUE',
      'DISCARD',
      'DO',
      'ELSE',
      'FALSE',
      'FLOAT',
      'FOR',
      'HIGHP',
      'IF',
      'IN',
      'INOUT',
      'INT',
      'INVARIANT',
      'IVEC2',
      'IVEC3',
      'IVEC4',
      'LOWP',
      'MAT2',
      'MAT3',
      'MAT4',
      'MEDIUMP',
      'OUT',
      'PRECISION',
      'RETURN',
      'SAMPLER2D',
      'SAMPLERCUBE',
      'STRUCT',
      'TRUE',
      'UNIFORM',
      'VARYING',
      'VEC2',
      'VEC3',
      'VEC4',
      'VOID',
      'WHILE',
      'EXPORT',
      'IMPORT',
      'COMPLEMENT',
      'DECREMENT',
      'INCREMENT',
      'NOT',
      'BITWISE_AND',
      'BITWISE_OR',
      'BITWISE_XOR',
      'DIVIDE',
      'EQUAL',
      'GREATER_THAN',
      'GREATER_THAN_OR_EQUAL',
      'LESS_THAN',
      'LESS_THAN_OR_EQUAL',
      'LOGICAL_AND',
      'LOGICAL_OR',
      'LOGICAL_XOR',
      'MINUS',
      'MULTIPLY',
      'NOT_EQUAL',
      'PLUS',
      'REMAINDER',
      'SHIFT_LEFT',
      'SHIFT_RIGHT',
      'ASSIGN',
      'ASSIGN_ADD',
      'ASSIGN_BITWISE_AND',
      'ASSIGN_BITWISE_OR',
      'ASSIGN_BITWISE_XOR',
      'ASSIGN_DIVIDE',
      'ASSIGN_MULTIPLY',
      'ASSIGN_REMAINDER',
      'ASSIGN_SHIFT_LEFT',
      'ASSIGN_SHIFT_RIGHT',
      'ASSIGN_SUBTRACT',
      'COLON',
      'COMMA',
      'DOT',
      'LEFT_BRACE',
      'LEFT_BRACKET',
      'LEFT_PARENTHESIS',
      'QUESTION',
      'RIGHT_BRACE',
      'RIGHT_BRACKET',
      'RIGHT_PARENTHESIS',
      'SEMICOLON',
      'EXTENSION',
      'VERSION',
      'INCLUDE',
      'PRAGMA',
      'FLOAT_LITERAL',
      'IDENTIFIER',
      'INT_LITERAL',
      'STRING_LITERAL',
      'END_OF_FILE',
    ],
    kh = Oa(
      Oa(
        Oa(
          Oa(
            Oa(Oa(Oa(Oa(Oa(new Map(), 0, 0), 1, 1), 2, 90), 3, 31), 4, 32),
            5,
            33
          ),
          6,
          34
        ),
        7,
        35
      ),
      8,
      36
    );
  ci();
})();
