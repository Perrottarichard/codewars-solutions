function anagrams(word, words) {
  let sWord = word.split("");
  let ans = [];

  for (let i = 0; i < words.length; i++) {
    let ws = words[i].split("");
    if (
      ws.every((n) => sWord.includes(n)) &&
      sWord.every((n) => ws.includes(n)) &&
      ws.length === sWord.length
    ) {
      ans.push(ws.join(""));
    }
  }
  return ans;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // ['carer', 'racer']
