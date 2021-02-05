function findMissingLetter(array) {
  string = array.join("");
  let i = 0;
  let newArr = [];
  while (i < string.length) {
    newArr.push(string.charCodeAt(i));
    i++;
  }
  let x;
  newArr.forEach((n, i) => {
    if (newArr[i + 1] && newArr[i + 1] !== n + 1) {
      x = n + 1;
    }
  });
  return String.fromCharCode(x);
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //e
console.log(findMissingLetter(["O", "Q", "R", "S"])); //P
