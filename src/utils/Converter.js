const { CATEGORY } = require('../Constants');

const Converter = {
  convertNumberToCategory(number) {
    return Object.values(CATEGORY)[number];
  },

  convertToStringArray(names) {
    return names.split(',');
  },
};

module.exports = Converter;
