const { Random } = require('@woowacourse/mission-utils');
const { FOODS } = require('../constants/FoodList');

const getSuggestMenu = (category) => {
  const menu = Random.pickNumberInRange(0, 5);
  return FOODS[category][menu];
};

module.exports = getSuggestMenu;
