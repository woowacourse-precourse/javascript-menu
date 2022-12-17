const { PARAMETERS } = require('./utils/constants');

const Exception = {
  checkInputFormat(input, range) {
    const [MIN_LENGTH, MAX_LENGTH] = range;

    if (input.length >= MIN_LENGTH && input.length <= MAX_LENGTH) {
      return true;
    }

    return false;
  },
};

module.exports = Exception;
