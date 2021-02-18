function orderWeight(str) {
  let ans = [];
  let data = {};
  let x = str.split(" ");
  for (let i = 0; i < x.length; i++) {
    let z = x[i].split("");
    let sum = z.reduce((a, b) => Number(a) + Number(b), 0);
    if (data[sum]) {
      data[sum].push(x[i]);
    } else {
      data[sum] = [x[i]];
    }
  }
  for (const [key, value] of Object.entries(data)) {
    if (value.length > 1) {
      let zArr = value.sort((a, b) => {
        return a[0] - b[0];
      });
      ans.push(zArr);
    } else {
      ans.push(value);
    }
  }
  return ans.join(" ").replace(/,/g, " ");
}
// console.log(orderWeight("103 123 4444 99 2000")); //"2000 103 123 4444 99"
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); //"11 11 2000 10003 22 123 1234000 44444444 9999"
console.log(
  orderWeight(
    "71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81"
  )
); //'1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703'
