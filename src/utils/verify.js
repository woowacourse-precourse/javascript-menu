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

  nameCount(data) {
    const result = data.split(',');
    if (result.length < 2 || result.length > 5) throw new Error('Invalid Coach Count');
  },

  nameLengthCount(data) {
    const result = data.split(',');
    result.forEach((name) => {
      if (name.length < 2 || name.length > 4) {
        throw new Error('Invalid Name Length');
      }
    });
  },

  //
};

module.exports = verify;
