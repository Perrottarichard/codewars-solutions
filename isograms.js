function isIsogram(str) {
  str = str.toLowerCase().split("");
  let set = new Set(str);
  let arr = Array.from(set);
  return str.length === arr.length;
}

console.log(isIsogram("Dermatoglyphics")); //t
console.log(isIsogram("isogram")); //t
console.log(isIsogram("aba")); //f
console.log(isIsogram("Aba")); //f
