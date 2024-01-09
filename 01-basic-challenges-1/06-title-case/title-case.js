function titleCase(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = titleCase;
