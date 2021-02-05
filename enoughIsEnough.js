function deleteNth(arr, n) {
  let answer = [];
  let occurs = (currentValue) => {
    let count = 0;
    answer.forEach((element) => {
      if (element === currentValue) {
        count++;
      }
    });
    return count;
  };
  for (let i = 0; i < arr.length; i++) {
    console.log(occurs(arr[i]));
    if (occurs(arr[i]) < n) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
console.log(deleteNth([20, 37, 20, 21], 1)); //[20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]
