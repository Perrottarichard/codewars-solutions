function solution(number) {

  let multArr = []
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0) {
      multArr.push(i)
    }
    if (i % 5 === 0) {
      multArr.push(i)
    }
  }
  let unique = new Set(multArr)
  multArr = [...unique]
  return multArr.reduce((a, b) => a + b, 0)
}

console.log(solution(10))