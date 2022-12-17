const { SYMBOL, DAYS } = require("../constants");

const MapMaker = {
  getMap(array) {
    return (
      SYMBOL.RESULT_OPEN + array.join(SYMBOL.SEPARATOR) + SYMBOL.RESULT_CLOSE
    );
  },

  getDivision() {
    return (
      SYMBOL.RESULT_OPEN + DAYS.join(SYMBOL.SEPARATOR) + SYMBOL.RESULT_CLOSE
    );
  },
};

module.exports = MapMaker;
