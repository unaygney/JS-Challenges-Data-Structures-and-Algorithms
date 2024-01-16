// function validateEmail(string) {
//   const regex = new RegExp(
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );

//   return regex.test(string);
// }

//solution 2 => without regex

function validateEmail(email) {
  // Check if the email contains the "@" symbol
  if (email.indexOf("@") === -1) {
    return false;
  }
  const [localPart, domain] = email.split("@");
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }
  const domainExtension = domain.split(".");
  if (domainExtension.length < 2 || domainExtension[1].length < 2) {
    return false;
  }
  return true;
}

module.exports = validateEmail;
