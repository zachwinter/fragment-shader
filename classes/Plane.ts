export default class Plane {
  private ctx: WebGLRenderingContext;
  public buffer: WebGLBuffer | null;

  constructor(ctx: WebGLRenderingContext | null) {
    if (ctx === null) throw Error('WebGLRenderingContext was null.');

    this.ctx = ctx;
    this.buffer = this.ctx.createBuffer();
    this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, this.buffer);
    this.ctx.bufferData(
      this.ctx.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      this.ctx.STATIC_DRAW
    );
  }

  render() {
    this.ctx.drawArrays(this.ctx.TRIANGLE_STRIP, 0, 4);
  }
}
