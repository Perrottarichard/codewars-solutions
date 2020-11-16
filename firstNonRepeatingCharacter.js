function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter('a')) //a
console.log(firstNonRepeatingLetter('stress')) //t
console.log(firstNonRepeatingLetter('moonmen')) 