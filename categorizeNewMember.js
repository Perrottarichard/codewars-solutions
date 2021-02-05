function openOrSenior(data) {
  let answer = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] < 55 || data[i][1] <= 7) {
      answer.push("Open");
    } else {
      answer.push("Senior");
    }
  }
  return answer;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); //['Open', 'Senior', 'Open', 'Senior']
