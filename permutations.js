function permutations(string) {
  let ans = [];
  if (string.length === 1) {
    ans.push(string);
    return ans;
  }

  for (let i = 0; i < string.length; i++) {
    let first = string[i];
    let digsLeft = string.substring(0, i) + string.substring(i + 1);
    let inner = permutations(digsLeft);
    for (let j = 0; j < inner.length; j++) {
      ans.push(first + inner[j]);
    }
  }
  return [...new Set(ans)];
}

console.log(permutations("aabb")); //['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
console.log(permutations("zip"));
