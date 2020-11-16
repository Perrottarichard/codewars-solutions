function squareDigits(num) {

  let numArr = Array.from(num.toString()).map(Number)
  let squaredArr = numArr.map(n => Math.pow(n, 2)).join('')
  return +squaredArr
}

console.log(squareDigits(9119))