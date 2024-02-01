function permutations(str) {
  str = str.toLowerCase();
  const newArr = [];

  // is array length greater than 0 ?
  if (str.length === 0) {
    newArr.push("");
    return newArr;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restChar = str.slice(0, i) + str.slice(i + 1);
    const subPer = permutations(restChar);

    for (let j = 0; j < subPer.length; j++) {
      newArr.push(firstChar + subPer[j]);
    }
  }

  return newArr;
}

module.exports = permutations;
