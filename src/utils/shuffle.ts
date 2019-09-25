export default function shuffle<T>(values: T[]): T[] {
  let m = values.length;
  let t: T;
  let i: number;

  while (m) {
    i = Math.floor(Math.random() * m);
    m -= 1;
    t = values[m];
    values[m] = values[i];
    values[i] = t;
  }

  return values;
}
