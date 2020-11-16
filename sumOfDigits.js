function digital_root(n) {
  let digits = Array.from(n.toString()).map(Number)

  while (digits.length !== 1) {
    sum = digits.reduce((a, b) => a + b, 0)
    digits = Array.from(sum.toString()).map(Number)
  }
  return sum
}

console.log(digital_root(16))
console.log(digital_root(493193))
console.log(digital_root(456))