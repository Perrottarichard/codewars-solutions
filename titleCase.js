function titleCase(title, minorWords) {
  let minor;
  if (!minorWords) {
    minor = [];
  }
  if (!title) {
    return "";
  }
  minor =
    minorWords !== undefined
      ? minorWords.split(" ").map((w) => w.toLowerCase())
      : [];
  let ans = [];
  for (let i = 0; i < title.length; i++) {
    if (title[i - 1] === " " || title[i - 1] === undefined) {
      ans.push(title[i].toUpperCase());
    } else {
      ans.push(title[i].toLowerCase());
    }
  }
  ans = ans.join("").split(" ");
  for (let i = 0; i < ans.length; i++) {
    if (minor.includes(ans[i].toLowerCase()) && i !== 0) {
      ans[i] = ans[i].toLowerCase();
    }
  }
  return ans.join(" ");
}

console.log(titleCase("a clash of KINGS", "a an the of")); //'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); //'The Wind in the Willows'
