const { Random } = require('@woowacourse/mission-utils');
const { CATEGORIES } = require('../constants');

class Recommend {
  getRandomCategory() {
    const randomNumber = Random.pickNumberInRange(1, 5);

    return CATEGORIES[randomNumber];
  }
}

module.exports = Recommend;
