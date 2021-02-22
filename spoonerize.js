function spoonerize(words) {
  let s = words.split(/\s/);
  let char1 = s[0][0];
  let char2 = s[1][0];
  return char2 + s[0].slice(1) + " " + char1 + s[1].slice(1);
}
console.log(spoonerize("nit picking"));
