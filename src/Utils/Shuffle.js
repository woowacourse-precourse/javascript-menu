const { Random } = require('@woowacourse/mission-utils');
const GetCategoryValue = require('../Utils/GetCategoryValue');
const Categories = require('../Utils/Categories');

const Shuffle = {
  shuffle(categoryNum) {
    const randomNum = Random.pickNumberInRange(0, 8)
    const menu = GetCategoryValue.getCategoryValue(categoryNum);
    return menu.split(', ')[randomNum];
  }
};

module.exports = Shuffle;
