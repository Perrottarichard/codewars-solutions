function XO(str) {
  str = str.toLowerCase()
  let x = str.split('').filter(c => c === 'x').length
  let o = str.split('').filter(c => c === 'o').length
  return x === o
}

console.log(XO("xxOo"))
console.log(XO("xxxoo"))