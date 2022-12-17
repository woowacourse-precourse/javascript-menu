const { SYMBOL, DAYS } = require("../constants");

const MapMaker = {
  getDivision() {
    let division =
      SYMBOL.RESULT_OPEN + DAYS.join(SYMBOL.SEPARATOR) + SYMBOL.RESULT_CLOSE;
    return division;
  },
};

module.exports = MapMaker;
