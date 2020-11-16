var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0
}

console.log(isSquare(4))
console.log(isSquare(25))
console.log(isSquare(26))
