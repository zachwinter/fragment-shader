export function randomNumber(min: number = 0, max: number = 1) {
  return Math.floor(Math.random() * max) + min;
}
