function songDecoder(song) {
  let deWubbed = song.replace(/(W{1}U{1}B{1}){3}|WUB/g, ' ').replace(/\s\s/g, ' ').trim()
  return deWubbed
}
console.log(songDecoder("AWUBBWUBC"))
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))
console.log(songDecoder("JKD WBIRAQKF  YE WV"))