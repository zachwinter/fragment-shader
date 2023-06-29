import { INITIALIZE_WORKER } from "../constants/worker";

let ctx
let program
let shader
let uniforms
let canvas
let height
let width


onmessage = ({ data }) => {
  if (data.canvas instanceof OffscreenCanvas) {
    canvas = data.canvas
    ctx = canvas.getContext('webgl2')
    program = ctx.createProgram()
  }

  switch (data?.message) {
    case INITIALIZE_WORKER:
      height = data.data.height
      width = data.data.width
      dpr = data.data.dpr
      shader = data.data.shader
      uniforms = data.data.uniforms
      break
    default:
      break
  }

  console.log(data)

  console.log({
    ctx,
    program,
    shader,
    uniforms,
    canvas,
    width,
    height
  })
}

// function init () {
//   ctx = this.canvas.getContext('webgl2');
//   program = this.ctx.createProgram()
//     this.compileShader(ctx.VERTEX_SHADER, this.vertexShader);
//     this.compileShader(ctx.FRAGMENT_SHADER, this.fragmentShader);
//     this.ctx.linkProgram(this.program as any);
//     this.ctx.useProgram(this.program);
//     this.ctx.viewport(0, 0, this.canvas.width, this.canvas.height);
//     this._uniforms = this.buildUniforms();
//     this.plane = new Plane(this.ctx);
//     this.ctx.enableVertexAttribArray(0);
//     this.ctx.vertexAttribPointer(
//       this.ctx.getAttribLocation(this.program as any, 'position'),
//       2,
//       this.ctx.FLOAT,
//       false,
//       0,
//       0
//     );