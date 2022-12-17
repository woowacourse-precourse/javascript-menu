const { REGEX } = require('../constants');

const toArray = (string) => {
  return string.replace(REGEX.SPACE, '').split(',');
};

module.exports = toArray;
