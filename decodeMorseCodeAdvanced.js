const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": '"',
  "...-..-": "$",
  ".--.-.": "@",
  "...---...": "SOS",
};

var decodeBits = function (bits) {
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces
  let bitCopy = bits;
  let key = 0;

  let i = bitCopy.length;

  while (i > 0) {
    if (bitCopy.match("1".repeat(i)) && !bitCopy.match("0".repeat(i))) {
      for (let j = Math.floor(bitCopy.length / 2); j > 0; j--) {
        while (bitCopy.match("1".repeat(j)) && bitCopy.match("0".repeat(j))) {
          bitCopy = bitCopy.replace("1".repeat(j), "_");
          key = j;
        }
      }
      break;
    }
    while (bitCopy.match("1".repeat(i)) && bitCopy.match("0".repeat(i))) {
      bitCopy = bitCopy.replace("1".repeat(i), "_");
      bitCopy = bitCopy.replace("0".repeat(i), "");
      key = i;
    }
    i--;
  }
  let dotKey = key;
  let dashKey = dotKey * 3;
  let wordSpaceKey = dotKey * 7;
  let charSpaceKey = key;

  while (bits.match("1".repeat(dashKey))) {
    bits = bits.replace("1".repeat(dashKey), "-");
  }
  while (bits.match("0".repeat(wordSpaceKey))) {
    bits = bits.replace("0".repeat(wordSpaceKey), "*");
  }
  while (bits.match("1".repeat(dotKey))) {
    bits = bits.replace("1".repeat(dotKey), ".");
  }
  while (bits.match("0".repeat(charSpaceKey))) {
    bits = bits.replace("0".repeat(charSpaceKey), " ");
  }
  return bits.replace(/0/g, "");
};

var decodeMorse = function (morseCode) {
  // ToDo: Accept dots, dashes and spaces, return human-readable message
  let fin = [];
  let removeDouble = morseCode.replace(/\s{2,}/g, "b");
  for (let i = 0; i < removeDouble.length; i++) {
    if (
      removeDouble[i] !== " " &&
      removeDouble[i] !== "b" &&
      removeDouble[i] !== "*"
    ) {
      fin.push(removeDouble[i]);
    } else if (removeDouble[i] === "b") {
      fin.push(" ");
    } else if (removeDouble[i] === "*") {
      fin.push(" * ");
    }
  }
  fin = fin
    .join("")
    .split(" ")
    .map((m) => MORSE_CODE[m]);
  let arr = [];
  for (let i = 0; i < fin.length; i++) {
    if (fin[i] !== undefined && !fin[i - 1]) {
      arr.push(fin[i]);
    } else if (fin[i] === undefined && fin && fin[i - 1] !== " ") {
      arr.push(" ");
    } else {
      arr.push(fin[i]);
    }
  }
  let answer = arr.join("").trim();
  return answer;
};

// console.log(
//   decodeMorse(
//     decodeBits(
//       "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
//     )
//   )
// ); //HEY JUDE

// console.log(decodeMorse(decodeBits("01110"))); //E
// console.log(decodeMorse(decodeBits("000000011100000"))); //E
console.log(decodeMorse(decodeBits("1110111"))); //M
