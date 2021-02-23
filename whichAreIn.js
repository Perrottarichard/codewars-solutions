function inArray(array1, array2) {
  let ans = [];
  for (let i = 0; i < array1.length; i++) {
    let reg1 = new RegExp(`${array1[i]}`);
    for (let j = 0; j < array2.length; j++) {
      if (reg1.test(array2[j])) {
        ans.push(array1[i]);
      }
    }
  }
  ans = ans.sort();
  let answer = [...new Set(ans)];
  return answer;
}

let a2 = [
  "your",
  "1.9.2.",
  "have",
  "opinion,",
  "me",
  "I",
  "I",
  "a",
  "sample;",
  "not",
  "browse",
  "would",
  "1.9?",
  "out",
  "Ruby",
  "questions",
  "updated",
  "that",
  "answer",
  "for",
  "best",
  "most",
  "have",
  "apidock",
  "the",
  "(since",
  "I",
];
let a1 = ["ou", "omm", "1.9", "ple", "gla", "by", "he"];
console.log(inArray(a1, a2)); //['1.9', by', 'he', 'ou', 'ple']
