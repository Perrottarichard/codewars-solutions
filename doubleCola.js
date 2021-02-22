function whoIsNext(names, r) {
  let max = r;
  let i = 0;
  while (i < max - 1) {
    let drinker = names.shift();
    names.push(drinker, drinker);
    i++;
  }
  return names[0];
}

let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
console.log(whoIsNext(names, 1)); //Sheldon
console.log(whoIsNext(names, 10)); //Penny
console.log(whoIsNext(names, 534)); //Rajesh
