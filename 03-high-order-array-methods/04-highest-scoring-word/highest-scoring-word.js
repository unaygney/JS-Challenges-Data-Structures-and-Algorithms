function highestScoringWord(string) {
  let words = string.toLowerCase().split(" ");
  let points = words.map((word, idx) => {
    return word
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);
  });
  let highestPoint = Math.max(...points);
  let highestIndex = points.indexOf(highestPoint);
  return words[highestIndex];
}

module.exports = highestScoringWord;
