function narcissistic(value) {
  let arr = value.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], arr.length);
  }
  return sum === value;
}
console.log(narcissistic(7)); //true
console.log(narcissistic(371)); //true
console.log(narcissistic(1652)); //false
