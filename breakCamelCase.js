function solution(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[A-Z]/g)) {
      arr.push(" ");
    }
    arr.push(string[i]);
  }
  return arr.join("");
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
