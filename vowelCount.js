function getCount(str) {
  var vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let arr = str.split('')
  arr.forEach(element => {
    if (vowels.includes(element)) {
      vowelsCount++
    }
  })
  return vowelsCount;
}
console.log(getCount("abracadabra"))