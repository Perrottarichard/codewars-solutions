function rot13(message) {
  let words = message.split(' ');
  let converted = [];
  let ch = [63, 46, 33, 32]; //codes for . ? !

  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      if (!ch.includes(words[i].charCodeAt(j)) && (words[i].charCodeAt(j) > 64 && words[i].charCodeAt(j) < 78)) {
        converted.push(String.fromCharCode(words[i].charCodeAt(j) + 13));
      } else if (!ch.includes(words[i].charCodeAt(j)) && (words[i].charCodeAt(j) >= 78 && words[i].charCodeAt(j) <= 90)) {
        converted.push(String.fromCharCode(words[i].charCodeAt(j) - 13));
      } else if (!ch.includes(words[i].charCodeAt(j)) && (words[i].charCodeAt(j) > 96 && words[i].charCodeAt(j) < 110)) {
        converted.push(String.fromCharCode(words[i].charCodeAt(j) + 13));
      } else if (!ch.includes(words[i].charCodeAt(j)) && (words[i].charCodeAt(j) >= 110 && words[i].charCodeAt(j) <= 122)) {
        converted.push(String.fromCharCode(words[i].charCodeAt(j) - 13));
      } else if (!ch.includes(words[i].charCodeAt(j))) {
        converted.push(words[i][j])
      }
    }
    converted.push(' ');
  }
  words = words.join(' ');
  let regexPunc = /[?.!]/g;
  if (words.match(regexPunc)) {
    converted = converted.join('').concat(words.charAt(words.length - 1));
  } else {
    converted = converted.join('');
  }
  converted = converted.replace(/(\s\?)/g, '?').replace(/(\s\.)/g, '.').replace(/(\s!)/g, '!').trim();
  return converted;
}

console.log(rot13('test'))
console.log(rot13('Test'))
console.log(rot13('Codewars'))