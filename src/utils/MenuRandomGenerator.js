const { Random } = require('@woowacourse/mission-utils');
const { SAMPLE } = require('../constants/Constant');

const MenuRandomGenerator = Object.freeze({
  generate(category) {
    const menus = SAMPLE[category].split(', ');
    const menu = Random.shuffle(menus)[0] - 1;
    return menus[menu];
  },
});

module.exports = MenuRandomGenerator;
