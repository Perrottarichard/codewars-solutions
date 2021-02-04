function nbYear(p0, percent, aug, p) {
  let newPop = p0;
  let count = 0;
  while (newPop < p) {
    newPop = newPop + (newPop * (percent / 100) + aug);
    count++;
  }
  return count;
}

console.log(nbYear(1500, 5, 100, 5000)); //15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); //10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); //94