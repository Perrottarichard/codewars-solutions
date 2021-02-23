function high(x) {
  let s = x.split(" ");
  let maxSum = 0;
  let maxWord = "";
  for (let i = 0; i < s.length; i++) {
    let z = s[i];
    let eachSum = 0;
    for (let j = 0; j < z.length; j++) {
      eachSum += z.charCodeAt(j) - 96;
    }
    if (eachSum > maxSum) {
      maxSum = eachSum;
      maxWord = z;
    }
  }
  return maxWord;
}

console.log(high("man i need a taxi up to ubud")); //taxi
console.log(high("what time are we climbing up the volcano")); //volcano
