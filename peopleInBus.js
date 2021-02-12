var number = function (busStops) {
  let riders = 0;
  for (let i = 0; i < busStops.length; i++) {
    riders += busStops[i][0];
    riders -= busStops[i][1];
  }
  return riders;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); //5
