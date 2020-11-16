
//not my code:
function queueTime(customers, n) {
  //Array constructor: creates an array of 'n' length and fills it with 0's
  let tills = Array(n).fill(0);
  console.log('tills-start', tills)

  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills))
    console.log('nextTill', nextTill)
    tills[nextTill] += customer;
    console.log('tills', tills)
  });

  return Math.max(...tills);
}

console.log(queueTime([16, 41, 30, 44, 12, 10, 38, 21, 20, 28, 3, 5, 11, 25, 40, 37, 25, 33, 41, 22, 25], 2)) //276
console.log(queueTime([11, 28, 44, 19, 20, 11, 48, 16, 6, 43, 44, 48, 1, 2, 26, 18, 39, 21, 48, 2, 37, 25, 25, 15, 31], 3)) //217