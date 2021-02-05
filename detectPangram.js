function isPangram(string) {
  string = string.toLowerCase();
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let count = [];
  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i]) && !count.includes(string[i])) {
      count.push(string[i]);
    }
  }
  return count.length === 26;
}

var string1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string1)); //true
var string2 = "This is not a pangram.";
console.log(isPangram(string2)); //false
