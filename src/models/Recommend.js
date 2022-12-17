const { Random } = require('@woowacourse/mission-utils');

const shuffle = require('../utils/shuffle');
const toArray = require('../utils/toArray');

const { CATEGORIES, MENUS } = require('../constants');

class Recommend {
  getRandomCategory() {
    const randomNumber = Random.pickNumberInRange(1, 5);

    return CATEGORIES[randomNumber];
  }

  getRandomMenu(category) {
    const menuOfCategory = toArray(MENUS[category]);
    const shuffledMenus = shuffle(menuOfCategory);

    return shuffledMenus[0];
  }
}

module.exports = Recommend;
