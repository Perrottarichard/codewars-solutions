function expandedForm(num) {
  let x = num.toString().split("");
  let answer = [];
  for (let i = 0; i < x.length; i++) {
    answer.push(x[i] + "0".repeat(x.length - i - 1));
  }
  return answer.filter((a) => a > 0).join(" + ");
}
console.log(expandedForm(42)); //'40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'
