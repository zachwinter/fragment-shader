# **fragment-shader**

This project owns two primary features: a minimalist shader renderer and a live code editor (**[try it here!](https://fragment-shader.herokuapp.com/)**).

> • `/classes/Shader.ts` – A lightweight & highly performant WebGL fragment shader renderer written in TypeScript.

- Appx. `3kb` (gzipped).
- Phenomal performance characteristics, both in rendering speed and in memory consumption.
- Extremely minimal taxing of the garbage collector.
- Certified jank-free – if your experience differs, please let me know!
- Zero-configuration instantiation (see `Shader.ts` section for details on all default behaviors).

> • `/classes/Editor.ts` – A live, in-browser GLSL code editor implemented with Codemirror, synced with an instance of `Shader.ts`.

- Appx. `165kb` (gzipped).
- Live rendering! Shader re-renders on every keystroke.
- Smart syntax highlighting and bracket matching.
- Realtime autocomplete surfaces GLSL keywords, uniform names & more as you write your shader.
- Shader compilation errors surface in the editor on relevant lines.
- `ShaderToy` support! Paste your favorite shaders into the editor (work in progress).

## **Installation** _( NPM )_

```bash
npm install --save fragment-shader
```

To begin let's look at the core renderer, found in `/classes/Shader.ts`.

## **Shader.ts**

> **Note** there are several plugins in modern IDEs (VSCode, etc.) that enable GLSL syntax highlighting within template literals by prefacing them with `/*glsl*/` – doesn't seem to work on GitHub though.

### **Bare Bones Implementation**

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

### **Configured Implementation**

If you wish for the renderer to behave differently than its default configuration, you can do so by passing the constructor a configuration object. The object's shape (and its default values) look like this:

```typescript
import { Shader, type ShaderConfig } from 'fragment-shader';

const config: ShaderConfig = {
  shader: /*glsl*/ `
    void main () {
      gl_FragColor = vec4(.8, .2, .7, 1.);
    }
  `,
  target: document.body,
  uniforms: [],
  width: window.innerWidth,
  height: window.innerHeight,
  dpr: window.devicePixelRatio,
  fillViewport: true,
  onSuccess: () => {},
  onError: () => {},
  animate: true,
  debug: false,
};

const shader = new Shader(config);
```

> **Note** If you explicitly set `width` or `height`, the renderer sets `fillViewport` to `false`.

If you become accustomed to the shader being the first argument of the constructor, you can instantiate this way:

```javascript
import { Shader, type ShaderConfig } from 'fragment-shader';

const config: ShaderConfig = { ... }

const shader = new Shader(/*glsl*/ `
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`, config);
```

> **Note** If you set `animate` to `false`, the shader will render its initial frame, but from thereon out you will be responsible for calling the `tick()` method on the Shader if you wish to update it – for example, within a `requestAnimationFrame` loop:

```javascript
import { Shader, type ShaderConfig } from 'fragment-shader';

const config: ShaderConfig = {
  shader: /*glsl*/ `
    void main () {
      gl_FragColor = vec4(.8, .2, .7, 1.);
    }
  `,
  animate: false,
};

const shader = new Shader(config);

const tick = (now: DOMHighResTimeStamp) => {
  requestAnimationFrame(tick);
  shader.tick(now);
};

requestAnimationFrame(tick);
```

### **Uniforms**

We can pass any number of `Uniform` values to our shaders. Uniforms passed to the `Shader` class are automatically injected into our shaders without having to define them explicitly. The renderer expects an array of uniforms, each of type `UniformValue`. The first index (`[0]`) of a `UniformValue` defines its `name`, the second (`[1]`) defines its `type`, and the third (`[2]`) defines its `value`.

> **Note** Please note that uniforms of type `bool` are unique in that their values aren't contained within an array.

```javascript
import { Shader, type UniformValue } from 'fragment-shader';

const zoom: UniformValue = ['zoom', 0, [2.5]];
const color: UniformValue = ['color', 3, [0.8, 0.2, 0.6]];
const warp: UniformValue = ['warp', 1, false];

const shader = new Shader({
  shader: /*glsl*/ `
    void main () {
      gl_FragColor = vec4(color, 1.);
    }
  `,
  uniforms: [zoom, color, warp],
});
```

Types are mapped as follows:

```javascript
const SHADER_TYPE_MAP = {
  0: 'float',
  1: 'bool',
  2: 'vec2',
  3: 'vec3',
  4: 'vec4',
};
```

### **Updating / Cleanup**

```javascript
// Update a uniform value.
shader.setUniform('color', [0.1, 0.6, 0.9]);

// Rebuild with a new shader.
shader.rebuild({ shader, uniforms });

// Destroy shader instance, elements, and event handlers.
shader.destroy();
```

## **Editor.ts**

Instantiating an `Editor` should feel familiar after working with the `Shader` class:

```javascript
import { Editor, type EditorConfig } from 'fragment-shader';

const config: EditorConfig = {
  shader: /*glsl*/ `
    void main () {
      gl_FragColor = vec4(.8, .2, .7, 1.);
    }
  `,
  uniforms: []
  target: document.body,
  width: window.innerWidth,
  height: window.innerHeight,
  dpr: window.devicePixelRatio,
  fillViewport: true,
  showLineNumbers: true,
  showErrors: true,
  onError: () => {},
  onSuccess: () => {},
  onUpdate: () => {},
};

const editor = new Editor(config);
```

An `Editor` shares several `Shader` methods:

```javascript
// Cancel the `requestAnimationFrame` loop.
editor.stop();

// Resume the `requestAnimationFrame` loop.
editor.start();

// Update a uniform value.
editor.setUniform('warp', false);

// Rebuild with a new shader.
editor.rebuild({ shader, uniforms });

// Destroy instance.
editor.destroy();
```
