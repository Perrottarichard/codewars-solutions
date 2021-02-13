function squareSum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let squared = [];
  numbers.forEach((element) => {
    squared.push(Math.pow(element, 2));
  });
  return squared.reduce((a, b) => a + b);
}

console.log(squareSum([0, 3, 4, 5])); //50
