function iqTest(numbers) {
  let solution = []
  numbers = numbers.split(' ')
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] !== ' ') {
      solution.push(numbers[i])
    }
  }
  if (solution.length === 1) {
    return numbers.findIndex(n => n % 2 === 0) + 1
  }
  return numbers.findIndex(n => n % 2 !== 0) + 1
}
console.log(iqTest("43 28 1 91"))

