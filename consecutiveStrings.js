//unscalable solution

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return ''
  } else if (k === 2) {
    let l = ''
    for (let i = 0; i < strarr.length - 1; i++) {
      let x = strarr[i]
      let y = strarr[i + 1]
      if ((x.length + y.length) > l.length) {
        l = x.concat(y)
      }
    }
    return l
  } else if (k === 3) {
    let l = ''
    for (let i = 0; i < strarr.length - 2; i++) {
      let x = strarr[i]
      let y = strarr[i + 1]
      let z = strarr[i + 2]
      if ((x.length + y.length + z.length) > l.length) {
        l = x.concat(y).concat(z)
      }
    }
    return l
  }

}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))