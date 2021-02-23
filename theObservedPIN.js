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
    0: ["0", "8"],
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
  let poss = [];
  splitDigits.forEach((element) => poss.push(combos[element]));
  let ans = [];
  if (splitDigits.length === 1) {
    return poss[0];
  }

  if (splitDigits.length === 2) {
    for (let i = 0; i < poss[0].length; i++) {
      for (let j = 0; j < poss[1].length; j++) {
        ans.push(poss[0][i] + poss[1][j]);
      }
    }
  }
  if (splitDigits.length === 3) {
    for (let i = 0; i < poss[0].length; i++) {
      for (let j = 0; j < poss[1].length; j++) {
        for (let k = 0; k < poss[2].length; k++) {
          ans.push(poss[0][i] + poss[1][j] + poss[2][k]);
        }
      }
    }
  }
  if (splitDigits.length === 4) {
    for (let i = 0; i < poss[0].length; i++) {
      for (let j = 0; j < poss[1].length; j++) {
        for (let k = 0; k < poss[2].length; k++) {
          for (let x = 0; x < poss[3].length; x++) {
            ans.push(poss[0][i] + poss[1][j] + poss[2][k] + poss[3][x]);
          }
        }
      }
    }
  }
  if (splitDigits.length === 8) {
    for (let i = 0; i < poss[0].length; i++) {
      for (let j = 0; j < poss[1].length; j++) {
        for (let k = 0; k < poss[2].length; k++) {
          for (let x = 0; x < poss[3].length; x++) {
            for (let r = 0; r < poss[4].length; r++) {
              for (let f = 0; f < poss[5].length; f++) {
                for (let a = 0; a < poss[6].length; a++) {
                  for (let b = 0; b < poss[7].length; b++) {
                    ans.push(
                      poss[0][i] +
                        poss[1][j] +
                        poss[2][k] +
                        poss[3][x] +
                        poss[4][r] +
                        poss[5][f] +
                        poss[6][a] +
                        poss[7][b]
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return ans;
}
console.log(getPINs("8")); //["5", "7", "8", "9", "0"]
console.log(getPINs("11")); //["11", "22", "44", "12", "21", "14", "41", "24", "42"]
console.log(getPINs("369")); //["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
