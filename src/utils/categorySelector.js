const { Random } = require('@woowacourse/mission-utils');
const CATEGORIES = require('../constants/constants');
module.exports = () => {
  const categoryID = Random.pickNumberInRange(1, 5);
  const [selected] = Object
    .entries(CATEGORIES)
    .filter(([__, { CATEGORY_NUMBER }]) => CATEGORY_NUMBER === categoryID)
    .map(([key, __]) => key);
  return selected;
};
