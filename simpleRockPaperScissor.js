const rps = (p1, p2) => {
  let data = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (data[p1] === p2) {
    return `Player 1 won!`;
  } else if (data[p2] === p1) {
    return `Player 2 won!`;
  } else {
    return `Draw!`;
  }
};

console.log(rps("rock", "scissors")); //"Player 1 won!"
console.log(rps("scissors", "paper")); //"Player 1 won!"
console.log(rps("rock", "rock"));
