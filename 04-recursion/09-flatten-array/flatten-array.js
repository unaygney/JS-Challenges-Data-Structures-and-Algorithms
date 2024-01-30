function flattenArray(array) {
  let newArr = [];

  for (let elem of array) {
    if (Array.isArray(elem)) {
      newArr = newArr.concat(flattenArray(elem));
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
}

module.exports = flattenArray;
