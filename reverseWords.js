function reverseWords(str) {
  let ans = [];
  let s = str.split(" ");
  s.forEach((element) => {
    return ans.push(element.split("").reverse().join(""));
  });
  return ans.join(" ");
}
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("apple"));
console.log(reverseWords("a b c d"));
