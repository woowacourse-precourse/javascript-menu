const { Random } = require('@woowacourse/mission-utils');

const Shuffler = Object.freeze({
  shuffle(menuList) {
    return Random.shuffle(Array.from({ length: menuList.length }, (_, index) => index));
  },
});

module.exports = Shuffler;
