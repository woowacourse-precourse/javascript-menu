const { SYMBOL } = require("../constants");

const ArrayMaker = {
  makeArray(inputString) {
    return inputString
      .split(SYMBOL.COMMA)
      .map((name) => name.replaceAll(" ", ""));
  },
};

module.exports = ArrayMaker;
