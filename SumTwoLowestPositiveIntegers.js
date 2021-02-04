function sumTwoSmallestNumbers(numbers) {
  let nums = numbers.sort((a, b) => a - b);
  let a = nums[0];
  let b = nums[1];
  return a + b;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); //24
