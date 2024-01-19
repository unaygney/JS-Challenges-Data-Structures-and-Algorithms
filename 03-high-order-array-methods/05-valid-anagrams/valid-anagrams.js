function validAnagrams(str1, str2) {
  const string1 = str1.split("");
  const string2 = str2.split("");

  let isValid = string2.every((element) => string1.includes(element));
  return isValid;
}

module.exports = validAnagrams;
