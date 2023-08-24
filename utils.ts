export function eqSet(xs: Set<string>, ys: Set<string>) {
    return xs.size === ys.size && Array.from(xs).every((x) => ys.has(x));
  }