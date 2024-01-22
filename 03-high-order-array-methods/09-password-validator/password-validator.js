function validatePassword(pass) {
  let PASSWORD_LENGTH = pass.length;
  let isUpperCase = checkUpperCase(pass);
  let isLowerCase = checkLowerCase(pass);
  let isDigit = checkDigit(pass);
  // check the length
  if (PASSWORD_LENGTH < 7 || !isUpperCase || !isLowerCase || !isDigit) {
    return false;
  }

  return true;
}

// function checking password is there at least one upper letter
function checkUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      return true;
    }
  }
  return false;
}
// function checking password is there at least one lower letter
function checkLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 177) {
      return true;
    }
  }
  return false;
}

function checkDigit(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      return true;
    }
  }
  return false;
}

module.exports = validatePassword;
