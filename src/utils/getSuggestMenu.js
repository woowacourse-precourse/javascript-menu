const { Random } = require('@woowacourse/mission-utils');
const { FOODS } = require('../constants/FoodList');

const getSuggestMenu = (category) => {
  const menu = Random.shuffle([0, 1, 2, 3, 4, 5]);
  const data = FOODS[menu[0]];

  return data[0];
};

module.exports = getSuggestMenu;
