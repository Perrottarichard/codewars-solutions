function cleanString(s) {
  let sp = s.split('');
  let arr = []
  for (var i = 0; i < sp.length; i++) {
    if (sp[i] !== '#') {
      arr.push(sp[i])
    } else {
      arr.pop()
    }
  }
  return arr.join('')
};

console.log(cleanString('abc#d##c'))
console.log(cleanString('abc####d##c#'))