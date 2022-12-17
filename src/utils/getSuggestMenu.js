const { Random } = require('@woowacourse/mission-utils');
const { FOODS } = require('../constants/FoodList');

const getSuggestMenu = (category) => {
  const menu = Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const data = FOODS[category][menu[0] - 1];
  return data;
};

module.exports = getSuggestMenu;
