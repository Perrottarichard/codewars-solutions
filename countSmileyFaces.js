//return the total number of smiling faces in the array
function countSmileys(arr) {
  let smileys = [
    ";)",
    ":)",
    ";D",
    ":D",
    ";~)",
    ":~)",
    ";-)",
    ":-)",
    ";~D",
    ":~D",
    ";-D",
    ":-D",
  ];
  let x = 0;
  arr.forEach((element) => {
    if (smileys.includes(element)) {
      x++;
    }
  });
  return x;
}
console.log(countSmileys([])); //0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); //4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); //2
