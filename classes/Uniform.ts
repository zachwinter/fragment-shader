export default class Uniform {
  private ctx: WebGLRenderingContext;
  private suffix: string;
  private location: any;

  constructor(
    ctx: WebGLRenderingContext | null,
    suffix: string,
    location: any
  ) {
    if (!ctx) throw Error('No rendering context provided.');
    this.ctx = ctx;
    this.suffix = suffix;
    this.location = location;
  }

  set(...values: any) {
    const ctx = this.ctx as any;
    const method: any = `uniform${this.suffix}`;
    const args = [this.location].concat(values);
    try {
      ctx?.[method].apply(ctx, args);
    } catch (e) {
      console.log(e);
    }
  }
}
