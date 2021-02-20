function solution(str) {
  if (str.length % 2 === 0) {
    return str.split(/(\w{2})/).filter((f) => f !== "");
  }
  return str
    .split(/(\w{2})/)
    .filter((f) => f !== "")
    .map((f) => (f.length === 1 ? f + "_" : f));
}

console.log(solution("abcdef")); //["ab", "cd", "ef"]
console.log(solution("abcdefg")); //["ab", "cd", "ef", "g_"]
