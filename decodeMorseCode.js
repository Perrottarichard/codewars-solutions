// decodeMorse = function (morseCode) {
//   // let splitter = morseCode.split(" ");
//   // let phrase = splitter.map((w) => MORSE_CODE[w]); //preloaded morse code dictionary on codewars
//   let phrase = ["H", "E", "Y", undefined, undefined, "J", "U", "D", "E"];
//   phrase.replace(/\s/g, " ");
//   console.log(phrase);
// };

// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
let phrase = [
  undefined,
  "S",
  undefined,
  undefined,
  "O",
  undefined,
  undefined,
  "S",
  undefined,
  "H",
  "E",
  "Y",
  undefined,
];
let arr = [];
for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] !== undefined && !arr[i - 1]) {
    arr.push(phrase[i]);
  } else if (phrase[i] === undefined && arr && arr[i - 1] !== " ") {
    arr.push(" ");
  } else {
    arr.push(phrase[i]);
  }
}
let answer = arr.join("").trim();
console.log(answer);
