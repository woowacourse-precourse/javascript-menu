const { CATEGORY } = require('../Constants');

const Converter = {
  convertNumberToCategory(number) {
    return Object.values(CATEGORY)[number];
  },
};

module.exports = Converter;
