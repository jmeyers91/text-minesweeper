import shuffle from './shuffle';

export default function sampleSize<T>(values: T[], count: number): T[] {
  return shuffle(values).slice(0, count);
}
