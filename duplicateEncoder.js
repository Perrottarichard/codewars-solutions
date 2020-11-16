function duplicateEncode(word) {
  let split = word.toLowerCase().split('')
  let obj = {}
  let result = []
  let solution = []
  split.forEach(el => {
    if (!obj[el]) {
      obj[el] = 0
    }
    obj[el] += 1
  });
  for (var char in obj) {
    if (obj[char] > 1) {
      result.push({ key: char, value: ')' })
    }
    else
      result.push({ key: char, value: '(' })
  }
  for (var i = 0; i < split.length; i++) {
    let x = result.find(a => a.key === split[i])
    solution.push(x.value)
  }
  return solution.join('')
}
console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))