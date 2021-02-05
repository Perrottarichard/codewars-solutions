function list(names) {
  let answer = [];
  if (!names) {
    return "";
  } else if (names.length === 1) {
    return names[0].name;
  } else {
    names.map((n) => {
      if (names.indexOf(n) === names.length - 2) {
        answer.push(n.name + " & ");
      } else if (names.indexOf(n) === names.length - 1) {
        answer.push(n.name);
      } else {
        answer.push(n.name + ", ");
      }
    });
    return answer.join("");
  }
}

console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); //'Bart, Lisa & Maggie'
console.log(list([{ name: "Bart" }, { name: "Lisa" }])); //'Bart & Lisa'
