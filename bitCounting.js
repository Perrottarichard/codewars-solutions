var countBits = function (n) {
  let count = 0
  let digArr = n.toString(2).split('')
  digArr.forEach(element => {
    if (element === '1') {
      count++
    }
  });
  return count
};

console.log(countBits(0)) //0
console.log(countBits(4)) //1
console.log(countBits(7)) //3
console.log(countBits(9)) //2
