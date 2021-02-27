//Not happy with this solution

function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }

  let lead = g;
  let v1FeetPerSec = v1 / 60 / 60;
  let v2FeetPerSec = v2 / 60 / 60;
  let sec = 0;
  let secsToEQ = 0;

  while (sec < 100000) {
    let v1Dist = v1FeetPerSec * sec + lead;
    let v2Dist = v2FeetPerSec * sec;

    if (v2Dist === v1Dist) {
      secsToEQ = sec;
      break;
    }
    if (v2Dist > v1Dist) {
      secsToEQ = sec - 1;
      break;
    }
    sec++;
  }

  let totalMinutes = secsToEQ / 60;

  let ansHour = Math.floor(totalMinutes / 60);
  let ansMin = Math.floor(totalMinutes - 60 * ansHour);
  let ansSec = secsToEQ % 60;

  return [ansHour, ansMin, ansSec];
}

console.log(race(720, 850, 70)); //[0, 32, 18]
console.log(race(80, 91, 37)); //[3, 21, 49]
console.log(race(80, 100, 40)); //[2, 0, 0]
console.log(race(523, 747, 126)); // [0, 33, 44]
console.log(race(587, 753, 130)); //[0, 46, 59]
console.log(race(565, 664, 121)); //[1, 13, 20]
console.log(race(194, 369, 84)); //[0, 28, 48]
