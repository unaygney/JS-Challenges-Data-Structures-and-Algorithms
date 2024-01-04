function isPalindrome(str) {
  if (str === "") {
    return true;
  }

  const cleanStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/\s/g, "");

  return cleanStr === cleanStr.split("").reverse().join("");
}

module.exports = isPalindrome;
