function removeSmallest(numbers) {
  let ans = [];
  let count = 0;
  let s = Math.min(...numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === s && count === 0) {
      count++;
    } else if (numbers[i] === s && count > 0) {
      ans.push(numbers[i]);
    }
    if (numbers[i] !== s) {
      ans.push(numbers[i]);
    }
  }
  return ans;
}

console.log(removeSmallest([1, 2, 3, 4, 5])); //[2, 3, 4, 5]
console.log(removeSmallest([2, 2, 1, 2, 1])); //[2, 2, 2, 1]
