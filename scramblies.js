function scramble(str1, str2) {
  let s1 = str1.split("");
  let seen = {};
  for (let i = 0; i < str2.length; i++) {
    if (seen[str2[i]]) {
      seen[str2[i]]++;
    } else {
      seen[str2[i]] = 1;
    }
  }
  for (let j = 0; j < s1.length; j++) {
    if (seen[s1[j]]) {
      seen[s1[j]]--;
    }
  }
  return Object.values(seen).every((x) => x === 0);
}
console.log(scramble("rkqodlw", "world")); //true
console.log(scramble("cedewaraaossoqqyt", "codewars")); //true
console.log(scramble("aabbcamaomsccdd", "commas")); //true
console.log(scramble("scriptjavx", "javascript")); //false
