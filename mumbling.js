function accum(s) {
  let sArr = s.split('').map(s => s.toUpperCase())
  let i = sArr.length - 1
  while (i > 0) {
    let j = i
    while (j > 0) {
      sArr[i] += sArr[i].charAt(0).toLowerCase()
      j--
    }
    if (i !== sArr.length - 1) {
      sArr[i] += '-'
    }
    i--
  }
  sArr[i] += '-'
  return sArr.join('')
}

console.log(accum("NyffsGeyylB"))
console.log(accum("MjtkuBovqrU"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))
