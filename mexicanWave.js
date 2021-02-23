function wave(str) {
  let ans = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let l = str.split("");
      l[i] = l[i].toUpperCase();
      ans.push(l.join(""));
    }
  }
  return ans;
}

console.log(wave("hello")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("two words")); //["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
