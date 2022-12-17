const { ERROR } = require('../constants/constants');

const verify = {
  // inputTypeNumber(input) {
  //   // if (Number.isNaN(Number(input))) throw new Error(ERROR.EXAMPLE);
  //   if (Number.isNaN(Number(input))) throw new Error();
  // },
  moreThanTwoData(data, arr) {
    let count = 0;
    arr.forEach((value) => {
      if (data === value) count += 1;
    });
    if (count > 2) return true;
    return false;
  },

  //
};

module.exports = verify;
