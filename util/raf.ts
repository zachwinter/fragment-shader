import { RAFConfig } from '../types/raf';

export function raf(
  tick: Function = () => {},
  { autoStart }: RAFConfig = { autoStart: false }
): { start: Function; stop: Function } {
  let _raf: any;

  const _tick = (now: DOMHighResTimeStamp) => {
    _raf = requestAnimationFrame(_tick);
    tick(now);
  };

  if (autoStart) _raf = requestAnimationFrame(_tick);

  return {
    start() {
      _raf = requestAnimationFrame(_tick);
    },

    stop() {
      cancelAnimationFrame(_raf);
    },
  };
}
