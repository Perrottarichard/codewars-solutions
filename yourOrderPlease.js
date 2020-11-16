function order(words) {
  let order = words.split(' ')
  const obj = [{}]
  order.map((o) => {
    obj.push({
      key: o.match(/[0-9]/g),
      value: o
    })
  })
  obj.sort((a, b) => a.key - b.key)
  let stringAnswer = obj.map(s => s.value).join(' ').trim()
  return stringAnswer
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order("is2 Thi1s T4est 3a"))