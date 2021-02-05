function towerBuilder(nFloors) {
  let answer = [];
  let star = "*";
  let floor = nFloors;
  while (floor > 0) {
    answer.push(star.repeat(floor * 2 - 1));
    floor--;
  }
  for (let i = 0; i < answer.length; i++) {
    let x = answer[i].padStart(nFloors * 2 - 1 - i, " ");
    let y = x.padEnd(nFloors * 2 - 1, " ");
    answer[i] = y;
  }
  return answer.reverse();
}
console.log(towerBuilder(1)); // ["*"]
console.log(towerBuilder(3)); //["  *  ", " *** ", "*****"]
