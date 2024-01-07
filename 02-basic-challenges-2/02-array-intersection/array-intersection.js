function arrayIntersection(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !newArray.includes(arr1[i])) {
      newArray.push(arr1[i]);
    }
  }

  return newArray;
}

module.exports = arrayIntersection;
