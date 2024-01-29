function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    let arr = [];
    arr = numberRange(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

module.exports = numberRange;
