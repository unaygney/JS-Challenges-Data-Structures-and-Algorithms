function areAllCharactersUnique(string) {
  if (!string) {
    return true;
  }

  let uniqueArray = new Set();

  for (let i = 0; i < string.length; i++) {
    uniqueArray.add(string[i]);
  }

  if (string.length !== uniqueArray.size) {
    return false;
  } else {
    return true;
  }
}

module.exports = areAllCharactersUnique;
