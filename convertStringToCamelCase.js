function toCamelCase(str) {

  if (str === '') {
    return ''
  }

  let indexes = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' | str[i] === '_')
      indexes.push(i + 1)
  }
  for (let z = 0; z < indexes.length; z++) {
    let start = str.slice(0, indexes[z])
    let changed = str.charAt(indexes[z]).toUpperCase()
    let end = str.slice(indexes[z] + 1)
    str = start + changed + end
  }

  str = str.replace(/-/g, '')
  str = str.replace(/_/g, '')
  return str
}


console.log(toCamelCase(''))
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("A-B-C"))
console.log(toCamelCase("Richard_is_the_king_of_the_world"))
