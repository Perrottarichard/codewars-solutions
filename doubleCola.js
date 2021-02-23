function whoIsNext(names, r) {
  if (r <= names.length) {
    return names[r - 1];
  }

  let range = {};
  let i = 0;
  let k = 2;
  while (i < r) {
    if (i * 2 + names.length >= r) {
      range[i * 2 + names.length] = k;
      range[i] = k / 2;
    } else {
      range[i * 2 + names.length] = false;
    }
    i = i * 2 + names.length;
    k *= 2;
  }
  let arr = Object.entries(range).filter((x) => x[1] !== false);

  let diffLower = r - arr[0][0];

  return names[Math.ceil(diffLower / arr[0][1]) - 1];
}
// let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
// console.log(whoIsNext(names, 1)); //Sheldon
// console.log(whoIsNext(names, 10)); //Penny
// console.log(whoIsNext(names, 534)); //Rajesh

// let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
// console.log(whoIsNext(names, 1)); //Sheldon //0
// console.log(whoIsNext(names, 5)); //Howard //5
// console.log(whoIsNext(names, 10)); //Penny //3
// console.log(whoIsNext(names, 15)); //Howard //5
// console.log(whoIsNext(names, 20)); //Leonard //2
// console.log(whoIsNext(names, 25)); //Penny //3

let names = [
  "Penny",
  "Yano",
  "Ishikawa",
  "Azuma",
  "Togusa",
  "Borma",
  "Proto",
  "Daisuke Aramaki",
  "Sheldon",
  "Pazu",
  "Rajesh",
  "Howard",
  "Saito",
  "Batou",
  "Motoko Kusanagi",
  "Leonard",
];
console.log(whoIsNext(names, 491501625431824));
// // Howard;

// let names = [
//   "Pazu",
//   "Batou",
//   "Leonard",
//   "Yano",
//   "Howard",
//   "Ishikawa",
//   "Sheldon",
//   "Togusa",
//   "Proto",
//   "Penny",
//   "Rajesh",
// ];
// console.log(whoIsNext(names, 471000012106)); //?
