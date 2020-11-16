function alphabetPosition(text) {
  let numArr = []
  text = text.toLowerCase().replace(/([^a-z])/g, '')
  for (var i = 0; i < text.length; i++) {
    numArr.push(text.charCodeAt(i) - 96)
  }
  return numArr.join(' ').toString()
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))
