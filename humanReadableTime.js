function humanReadable(seconds) {
  let totalMinutes = Math.floor(seconds / 60).toString();
  let hours = Math.floor(totalMinutes / 60).toString();
  let displayMinutes = Math.floor(totalMinutes % 60).toString();
  let sec = (seconds - totalMinutes * 60).toString();

  return (
    hours.padStart(2, 0) +
    ":" +
    displayMinutes.padStart(2, 0) +
    ":" +
    sec.padStart(2, 0)
  );
}

console.log(humanReadable(0)); //'00:00:00
console.log(humanReadable(60)); //'00:01:00
console.log(humanReadable(86399)); //'23:59:59
