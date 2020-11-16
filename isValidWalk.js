function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  } else {
    let count = 0
    walk.forEach(e => {
      if (e === 'n') {
        count++
      }
      if (e === 's') {
        count--
      }
      if (e === 'e') {
        count += 21
      }
      if (e === 'w') {
        count -= 21
      }
    });
    if (count === 0) {
      return true
    } else
      return false
  }

}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))