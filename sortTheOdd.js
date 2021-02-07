function sortArray(array) {
  let answer = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      answer[i] = array[i];
    } else {
      let minOdd = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b)[
        index
      ];
      answer[i] = minOdd;
      index++;
    }
  }
  return answer;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
