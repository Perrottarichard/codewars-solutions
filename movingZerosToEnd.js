var moveZeros = function (arr) {
  let temp = arr.filter((x) => x !== 0);
  let zeroesArr = arr.filter((x) => x === 0);
  return [...temp, ...zeroesArr];
};
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); //[false,1,1,2,1,3,"a",0,0]
