export default function replaceWhere<T>(
  array: T[],
  predicate: (value: T) => boolean,
  replace: (value: T) => T
): T[] {
  return array.map(value => (predicate(value) ? replace(value) : value));
}
