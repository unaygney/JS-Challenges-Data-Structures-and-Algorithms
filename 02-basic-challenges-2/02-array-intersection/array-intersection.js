// function arrayIntersection(arr1, arr2) {
//   let newArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !newArray.includes(arr1[i])) {
//       newArray.push(arr1[i]);
//     }
//   }

//   return newArray;
// }

function arrayIntersection(arr1, arr2) {
  const setArray = new Set(arr1);
  const intersection = [];

  for (let number of arr2) {
    if (setArray.has(number)) {
      intersection.push(number);
    }
  }
  return intersection;
}

module.exports = arrayIntersection;
