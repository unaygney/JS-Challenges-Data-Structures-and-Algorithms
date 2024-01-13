function diceGameSimulation(numSimilation) {
  const games = [];
  for (let i = 0; i < numSimilation; i++) {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let resultValue = randomNumber1 + randomNumber2;

    if (resultValue === 7 || resultValue === 11) {
      resultValue = "win";
    } else if (resultValue === 2 || resultValue === 3 || resultValue === 12) {
      resultValue = "lose";
    } else {
      resultValue = "roll again";
    }

    games.push({
      dice1: randomNumber1,
      dice2: randomNumber2,
      sum: randomNumber1 + randomNumber2,
      result: resultValue,
    });
  }
  return games;
}

module.exports = diceGameSimulation;
