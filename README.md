# **fragment-shader**

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

---

```bash
npm install --save fragment-shader
```

To begin let's look at the core renderer, found in `/classes/Shader.ts`.

## **Shader.ts**

---

> **Note** there are several plugins in modern IDEs (VSCode, etc.) that enable GLSL (shader language) syntax highlighting within template literals by prefacing them with `/*glsl*/` – doesn't seem to work on GitHub though.

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

---

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

Or, if you become accustomed to the shader being the first argument of the constructor, you can instantiate this way:

```javascript
import { Shader, type ShaderConfig } from 'fragment-shader';

const config: ShaderConfig = { ... }

const shader = new Shader(/*glsl*/ `
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`, config);
```

> **Note** If you set `animate` to `false`, the shader will render its initial frame, but from thereon out you will be responsible for calling the `tick()` method on the Shader if you wish to update it – for example, within a `requestAnimationFrame` loop.

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

Now that we can easily render shaders in the browser, let's experiment with authoring them too!

---

## **Editor.ts**

Instantiating an `Editor` should feel familiar after working with the `Shader` class:

```javascript
import { Editor } from 'fragment-shader';

const glsl = /*glsl*/ `
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`;

const editor = new Editor(glsl);
```

> ( More documentation coming soon! )
