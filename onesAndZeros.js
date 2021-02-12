const binaryArrayToNumber = (arr) => {
  let bin = arr.join("");
  return parseInt(bin, 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1])); //1
console.log(binaryArrayToNumber([1, 1, 1, 1])); //15
