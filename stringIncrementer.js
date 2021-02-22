function incrementString(strng) {
  let digs = strng.split(/\D/);
  let chars = strng.split(/[0-9]/);

  let numString = digs[digs.length - 1];
  let charString = chars[0];

  let target = +numString + 1;
  let l = numString.length;
  let padded = target.toString().padStart(l, "0");
  return charString.concat(padded);
}
console.log(incrementString("foobar000")); //"foobar001"
console.log(incrementString("foo")); //"foo1"
console.log(incrementString("foobar99")); //"foobar100"
