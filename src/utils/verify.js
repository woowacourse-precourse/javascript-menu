const { ERROR } = require('../constants/constants');
const { FOODLIST } = require('../constants/FoodList');

const verify = {
  moreThanTwoData(data, arr) {
    let count = 0;
    arr.forEach((value) => {
      if (data === value) count += 1;
    });
    if (count >= 2) return true;
    return false;
  },

  nameCount(data) {
    const result = data.split(',');
    if (result.length < 2 || result.length > 5) throw new Error(ERROR.INVALID_COACH_COUNT);
  },

  nameLengthCount(data) {
    const result = data.split(',');
    result.forEach((name) => {
      if (name.length < 2 || name.length > 4) {
        throw new Error(ERROR.INVALID_NAME_COUNT);
      }
    });
  },

  existMenu(input) {
    const data = input.split(',');
    data.forEach((food) => {
      if (!FOODLIST.includes(food)) throw new Error(ERROR.INVALID_ENABLE_EAT_FOOD);
    });
  },

  unableMenuLength(input) {
    const data = input.split(',');
    if (data.length > 2) throw new Error(ERROR.INVALID_FOOD_LIST_LENGTH);
  },

  eatenTwice(eatenList, menu) {
    const result = eatenList.filter((value) => value === menu);
    if (result.length >= 2) return true;
    return false;
  },
};

module.exports = verify;
