const { ERROR } = require('../constants/constants');
const { FOODLIST } = require('../constants/FoodList');

const verify = {
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

  existMenu(input) {
    const data = input.split(',');
    data.forEach((food) => {
      if (!FOODLIST.includes(food)) throw new Error('No Food');
    });
  },

  unableMenuLength(input) {
    const data = input.split(',');
    if (data.length > 2) throw new Error('OverFlow Foods');
  },
};

module.exports = verify;
