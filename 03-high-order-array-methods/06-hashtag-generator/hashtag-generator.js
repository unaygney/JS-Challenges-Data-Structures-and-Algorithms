function generateHashtag(string) {
  if (!string || string.trim().length > 140) {
    return false;
  }
  let capitalizeWord = string
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  let newString = `#${capitalizeWord}`;

  return newString;
}

module.exports = generateHashtag;
