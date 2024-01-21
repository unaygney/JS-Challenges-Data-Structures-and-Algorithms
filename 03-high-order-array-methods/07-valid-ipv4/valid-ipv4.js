const isValidIPv4 = (str) => {
  let SPLIT_ARRAY = str.split(".");
  let STRING_LENGTH = SPLIT_ARRAY.length;
  // Check array length if greater than 4 return false
  if (STRING_LENGTH !== 4) {
    return false;
  }

  // does start with zero??
  for (let i = 0; i < STRING_LENGTH; i++) {
    if (SPLIT_ARRAY[i].startsWith("0") || SPLIT_ARRAY[i].endsWith("0")) {
      return false;
    }
  }

  return true;
};

module.exports = isValidIPv4;
