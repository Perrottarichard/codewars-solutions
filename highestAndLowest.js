function highAndLow(numbers) {
  let arr = numbers.split(' ').sort((a, b) => a - b)
  return arr[arr.length - 1] + ' ' + arr[0]
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))