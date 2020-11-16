function getMiddle(s) {
  let mid = s.length / 2
  if (mid % 1 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 0.5) + s.charAt(mid + 0.5)
  }
}

console.log(getMiddle("testing"))
console.log(getMiddle("middle"))