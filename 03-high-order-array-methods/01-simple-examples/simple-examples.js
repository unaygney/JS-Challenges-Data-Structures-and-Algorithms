const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const mapExamplesArray = numbers.map((numb) => numb * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const filterArray = numbers.filter(function (numb) {
  return numb % 2 === 0;
});

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
// const totalNumber = numbers.reduce((acc, currentVal) => acc + currentVal, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 *
 */
// numbers.forEach((num) => {
//   console.log(num);
// });
/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const findArray = numbers.find((num) => num % 5 === 0 && num % 5 === 0);
console.log(findArray);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const isThereEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(isThereEvenNumber);
/**
 * every: Checks if all array elements satisfy a condition.
 */

const isAllEven = numbers.every((num) => num % 2 === 0);
console.log(isAllEven);
