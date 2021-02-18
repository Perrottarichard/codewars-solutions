function isPrime(num) {
  if (num === 0 || num === 1 || num < 0) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let count = 0;
  let i = 2;
  let k = Math.ceil(Math.sqrt(num));
  while (i <= k) {
    if (num % i === 0) {
      count++;
    }
    i++;
  }
  return count === 0;
}
console.log(isPrime(73)); //true
console.log(isPrime(2)); //true
console.log(isPrime(4)); //false
console.log(isPrime(75)); //false
console.log(isPrime(-8)); //false
