# fragment-shader

> A lightweight & performant WebGL fragment shader renderer.

```javascript
import { Shader } from 'fragment-shader';

const shader = new Shader(/* glsl */ `
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`);

const tick = now => {
  requestAnimationFrame(tick);
  shader.tick(now);
};

requestAnimationFrame(tick);
```
