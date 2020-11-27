function longest(s1, s2) {
  let arr = []
  s1.split('').sort().map(c => !arr.includes(c) ? arr.push(c) : null)
  s2.split('').sort().map(c => !arr.includes(c) ? arr.push(c) : null)
  return arr.sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))