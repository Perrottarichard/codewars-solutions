function spinWords(string) {
  let split = string.split(' ')
  let solved = split.map(w => w.length >= 5 ? w.split('').reverse().join('') : w).join().replace(/,/g, ' ')
  return solved
}

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))