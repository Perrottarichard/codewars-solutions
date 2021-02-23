function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) {
    return -1;
  } else {
    let num = Math.sqrt(sq);
    let next = Math.pow(num + 1, 2);
    return next;
  }
}
console.log(findNextSquare(121)); //144
console.log(findNextSquare(155)); //-1
