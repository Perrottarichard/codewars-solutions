function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  let a = array1.map((n) => n * n);

  let x = a.sort((a, b) => a - b);
  let y = array2.sort((a, b) => a - b);
  return JSON.stringify(x) === JSON.stringify(y);
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));
