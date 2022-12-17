const { Random } = require('@woowacourse/mission-utils');

const RandomMaker = {
  category() {
    return Random.pickNumberInRange(1, 5) - 1;
  },

  menu(menuList) {
    const list = menuList.map((_, index) => index);
    const num = Random.shuffle(list)[0];
    return menuList[num];
  },
};

module.exports = RandomMaker;
