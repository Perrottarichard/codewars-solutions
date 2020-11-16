function friend(friends) {
  return friends.filter(f => f.length === 4 ? f : null)
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))