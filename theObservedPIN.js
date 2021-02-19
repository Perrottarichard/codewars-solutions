// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

function getPINs(observed) {
  let combos = {
    1: ["1", "2", "4"],
    2: ["2", "1", "3", "5"],
    3: ["3", "2", "6"],
    4: ["4", "1", "5", "7"],
    5: ["5", "2", "4", "6", "8"],
    6: ["6", "3", "5", "9"],
    7: ["7", "4", "8"],
    8: ["8", "5", "7", "9", "0"],
    9: ["9", "6", "8"],
  };
  let splitDigits = observed.split("");
  let allDigitsToInclude = [];
  splitDigits.forEach((element) => allDigitsToInclude.push(...combos[element]));
  let ans = [];
  if (splitDigits.length === 1) {
    return allDigitsToInclude[0];
  }
  let data = {};
  if (splitDigits.length === 2) {
    for (let i = 0; i < allDigitsToInclude.length; i++) {
      // console.log("i", i);
      for (let j = 0; j < allDigitsToInclude.length; j++) {
        if (!data[allDigitsToInclude[i] + allDigitsToInclude[j]]) {
          data[allDigitsToInclude[i] + allDigitsToInclude[j]] = true;
        }
      }
    }
  }
  if (splitDigits.length === 3) {
    for (let i = 0; i < allDigitsToInclude.length; i++) {
      for (let j = 0; j < allDigitsToInclude.length; j++) {
        for (let k = 0; k < allDigitsToInclude.length; k++) {
          if (
            !data[
              allDigitsToInclude[i] +
                allDigitsToInclude[j] +
                allDigitsToInclude[k]
            ] &&
            combos[allDigitsToInclude[i]].includes(allDigitsToInclude[j]) &&
            combos[allDigitsToInclude[i]].includes(allDigitsToInclude[k])
          ) {
            data[
              allDigitsToInclude[i] +
                allDigitsToInclude[j] +
                allDigitsToInclude[k]
            ] = true;
          }
        }
      }
    }
  }

  console.log(data);
}
// console.log(getPINs("8")); //["5", "7", "8", "9", "0"]
// console.log(getPINs("11")); //["11", "22", "44", "12", "21", "14", "41", "24", "42"]
console.log(getPINs("369")); //["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
