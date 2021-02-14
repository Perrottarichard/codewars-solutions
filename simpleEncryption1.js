function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }
  const changeIt = (string) => {
    let start = [];
    let end = [];
    let arr = text.split("");
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        end.push(arr[i]);
      } else {
        start.push(arr[i]);
      }
    }
    text = start.join("").concat(end.join(""));
  };
  let answer;
  let count = 0;
  while (count < n) {
    answer = changeIt(text);
    count++;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  }
  const changeIt = (string) => {
    let arr = encryptedText.split("");
    let start = arr.slice(arr.length / 2);
    let end = arr.slice(0, arr.length / 2);
    let ans = [];
    for (let i = 0; i < start.length; i++) {
      ans.push(start[i]);
      ans.push(end[i]);
    }
    encryptedText = ans.join("");
  };
  let answer;
  let count = 0;
  while (count < n) {
    answer = changeIt(encryptedText);
    count++;
  }
  return encryptedText;
}

console.log(encrypt("This is a test!", 1)); //"hsi  etTi sats!"
console.log(decrypt("hsi  etTi sats!", 1)); //"This is a test!"
console.log(encrypt("This kata is very interesting!", 1)); //"hskt svr neetn!Ti aai eyitrsig"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); //"This kata is very interesting"
