function solution(roman) {
  let chart = {
    I: "1",
    V: "5",
    X: "10",
    L: "50",
    C: "100",
    D: "500",
    M: "1000",
  };
  let value = 0;
  let s = roman.split("");
  for (let i = 0; i < s.length; i++) {
    if (
      parseInt(chart[s[i]]) < parseInt(chart[s[i + 1]]) &&
      s[i + 1] !== undefined
    ) {
      value -= parseInt(chart[s[i]]);
    } else {
      value += parseInt(chart[s[i]]);
    }
  }
  return value;
}
console.log(solution("XXI")); //21
console.log(solution("MMVIII")); //2008
console.log(solution("IV")); //4
