String.prototype.toJadenCase = function () {
  let arr = this.split(' ')
  let mapped = arr.map(word => word[0].toUpperCase().concat(word.slice(1, word.length)))
  let jadenize = mapped.join(' ')
  return jadenize
}