function pigIt(str) {
  let words = str.split(" ");
  let phrase = [];
  words.forEach((word) => {
    let pigString = "";
    if (!word.match(/[?.!,]/g)) {
      for (var i = 0; i < word.length; i++) {
        pigString = "ay";
        let finalString = word
          .slice(1)
          .concat(word.slice(0, 1))
          .concat(pigString);
        return phrase.push(finalString);
      }
    } else {
      phrase.push(word);
    }
  });
  return phrase.join(" ");
}
