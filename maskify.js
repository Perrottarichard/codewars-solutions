function maskify(cc) {
  let sliced;
  if (cc.length > 4) {
    sliced = cc.slice(cc.length - 4, cc.length)
  } else {
    sliced = cc
  }
  let arr = []
  for (var i = 0; i < cc.length - 4; i++) {
    arr.push('#')
  }
  let mask = arr.join('').concat(sliced)
  return mask
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))