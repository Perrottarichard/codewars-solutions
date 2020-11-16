function persistence(num) {

  let count = 0
  const func = (num) => {
    newNum = num.toString().split('')
    if (newNum.length === 1) {
      return count
    }
    let product = newNum[0]
    for (let i = 1; i < newNum.length; i++) {
      product *= newNum[i]
    }
    count += 1
    func(product)
  }
  func(num)
  return count
}

console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(999))