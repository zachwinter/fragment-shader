import { HasResolution } from './../types/dimensions';

export function createCanvas(
  target: HTMLElement = document.body
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  target.appendChild(canvas);
  return canvas;
}

export function sizeCanvas(
  canvas: HTMLCanvasElement,
  { width, height, dpr }: HasResolution = {
    width: window.innerWidth,
    height: window.innerHeight,
    dpr: window.devicePixelRatio,
  }
): void {
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}
