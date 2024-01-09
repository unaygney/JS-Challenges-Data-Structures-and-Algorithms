function displayLikes(names) {
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length > 1 && names.length && names.length < 3) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else {
    return "no one likes this";
  }
}

module.exports = displayLikes;
