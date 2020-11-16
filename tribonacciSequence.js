function tribonacci(signature, n) {

  if (n === 0) {
    return []
  }
  if (n === 1) {
    return [signature[0]]
  }
  if (n === 2) {
    return [signature[0], signature[1]]
  }

  let a = 0
  let b = 1
  let c = 2
  let next

  for (var i = 0; i < n - 3; i++) {
    next = signature[a] + signature[b] + signature[c]
    signature.push(next)
    a++
    b++
    c++
  }

  return signature;
}

console.log(tribonacci([1, 0, 0], 10)) //[1,0,0,1,1,2,4,7,13,24])
console.log(tribonacci([0, 1, 1], 10)) //[0,1,1,2,4,7,13,24,44,81])
console.log(tribonacci([3, 2, 1], 10)) //[3,2,1,6,9,16,31,56,103,190]