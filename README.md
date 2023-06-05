# fragment-shader

> A lightweight & performant WebGL fragment shader renderer.

```javascript
import { Shader } from 'fragment-shader';

new Shader(`
  void main () {
    gl_FragColor = vec4(.8, .2, .7, 1.);
  }
`);
```
