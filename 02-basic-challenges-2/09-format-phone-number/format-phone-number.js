function formatPhoneNumber(NumberArray) {
  if (NumberArray && NumberArray.length === 10) {
    let areaCode = addAreaCode(NumberArray);
    let firstThreeNumber = [...NumberArray.slice(3, 6)].join("");
    let restNumber = [...NumberArray.slice(6)].join("");

    let formatNumber = `${areaCode} ${firstThreeNumber}-${restNumber}`;
    return formatNumber;
  } else {
    throw new Error("Numbers must be 10 characters");
  }
}

function addAreaCode(NumberArray) {
  let areaCode;
  areaCode = NumberArray.slice(0, 3);
  areaCode.push(")");
  areaCode.unshift("(");
  return areaCode.join("");
}

module.exports = formatPhoneNumber;
