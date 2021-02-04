function findEvenIndex(arr) {
  let answer;
  for (let i = 0; i < arr.length; i++) {
    let first = arr.slice(0, i);
    let rest = arr.slice(i + 1);
    // console.log("f", first);
    // console.log("r", rest);
    let sumF = first.reduce((a, b) => a + b, 0);
    let sumR = rest.reduce((a, b) => a + b, 0);
    // console.log("sumF", sumF);
    // console.log("sumR", sumR);
    if (sumF === sumR) {
      answer = i;
    }
  }
  if (answer === undefined) {
    return -1;
  } else {
    return answer;
  }
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //-1 (no answer found)
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3
console.log(findEvenIndex([8, 0])); //0
console.log(findEvenIndex([7, 3, -3])); //0
console.log(findEvenIndex([8])); //0
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); //0
