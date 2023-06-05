# **fragment-shader**

> A lightweight & highly performant WebGL fragment shader renderer written in TypeScript.

- Smaller than `3kb`.
- Phenomal performance characteristics, both in rendering speed and in memory consumption.
- Extremely minimal taxing of the garbage collector.
- Certified jank-free – if your experience differs, please let me know!
- Zero-configuration instantiation (see `Hello World` section for details on all default behaviors.

## **Installation** _( NPM )_

---

```bash
npm install --save fragment-shader
```

## **Hello World** _( Default / Bare Bones Implementation )_

---

> **Note:** there are several plugins in modern IDEs (VSCode, etc.) that enable GLSL (shader language) syntax highlighting within template literals by prefacing them with `/*glsl*/` – doesn't seem to work on GitHub though.

```javascript
import { Shader } from 'fragment-shader';

const glsl = /*glsl*/ `
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`;

const shader = new Shader(glsl);
```

The above code example instantiates an instance of the `Shader` class and passes it but a single paramter: a `string` containing your fragment shader code. By default, the `Shader` class will instantiate a `<canvas>` element and append it directly to the `<body>`. The `<canvas>` will then be sized to match the size of the browser window (and the display's pixel density). Given the default configuration value of `fillViewport` being `true`, An event listener is then created for the `resize` event on the browser window, allowing the renderer and its `<canvas>` to resize according to the browser window changing size or orientation. Then, after bootstrapping a `webgl2` rendering context, it prepares all internals (including compiling your shader) before finally initializing an internal `requestAnimationFrame` loop, syncing the rendering animation to the native refresh rate of the display. There are two methods on the shader instance for controlling rendering playback:

```javascript
// Cancel the `requestAnimationFrame` loop.
shader.stop();

// Resume the `requestAnimationFrame` loop.
shader.start();
```

## **Configured Implementation**

---

If you wish for the renderer to behave differently than its default configuration, you can do so by passing the constructor a configuration object.

```typescript
import { Shader } from 'fragment-shader';

const config: ShaderConfig = {
  shader: /*glsl*/ `
    void main () {
      gl_FragColor = vec4(.8, .2, .7, 1.);
    }
  `,
  target: document.body,
  uniforms: [],
  width: 800,
  height: 600,
  dpr: window.devicePixelRatio,
  fillViewport: false,
  onSuccess: () => {},
  onError: () => {},
  animate: false,
  debug: false,
};

const shader = new Shader(config);
```

Or, if you become accustomed to the shader being the first argument of the constructor, you can instantiate this way:

```javascript
import { Shader } from 'fragment-shader';

const config: ShaderConfig = { ... }

const shader = new Shader(/*glsl*/ `
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`, config);
```

> **Note** If you set `animate` to `false`, the shader will render its initial frame, but from thereon out you will be responsible for calling the `tick()` method on the Shader if you wish to update it – for example, within a `requestAnimationFrame` loop.

```javascript
import { Shader } from 'fragment-shader';

const shader = new Shader(
  /*glsl*/ `
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`,
  { animate: false }
);

const tick = (now: DOMHighResTimeStamp) => {
  requestAnimationFrame(tick);
  shader.tick(now);
};

requestAnimationFrame(tick);
```
