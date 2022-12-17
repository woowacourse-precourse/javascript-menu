function userNameValid(names) {
  const splitName = names.split(',');

  if (
    checkNameLength(splitName) > 0 ||
    checkSameName(splitName) !== splitName.length ||
    splitName.length < 2 ||
    splitName.length > 5
  ) {
    return false;
  }

  return true;
}

function checkNameLength(splitName) {
  return splitName.filter(
    name => !Number.isNaN(Number(name)) || name.length < 1 || name.length > 4
  ).length;
}

function checkSameName(splitName) {
  return new Set(...splitName).size;
}

module.exports = userNameValid;
