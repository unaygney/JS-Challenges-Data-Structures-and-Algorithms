const isValidIPv4 = (str) => {
  let SPLIT_ARRAY = str.split(".");
  let STRING_LENGTH = SPLIT_ARRAY.length;
  // Check array length if greater than 4 return false
  if (STRING_LENGTH !== 4) {
    return false;
  }

  // does start with zero?? or up to 255??
  for (let i = 0; i < STRING_LENGTH; i++) {
    const currentValue = parseFloat(SPLIT_ARRAY[i]);

    if (
      SPLIT_ARRAY[i].startsWith("0") ||
      SPLIT_ARRAY[i].endsWith("0") ||
      currentValue >= 255
    ) {
      return false;
    }
  }

  return true;
};

module.exports = isValidIPv4;
