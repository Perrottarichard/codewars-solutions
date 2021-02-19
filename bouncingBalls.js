function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  let count = 0;
  while (h > 1) {
    if (h > window) {
      count++;
    }
    if (h * bounce > window) {
      count++;
    }
    h = h * bounce;
  }
  return count;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30.0, 0.66, 1.5)); //15
