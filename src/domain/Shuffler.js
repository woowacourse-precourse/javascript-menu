const { Random } = require('@woowacourse/mission-utils');

const Shuffler = Object.freeze({
  shuffle(length) {
    const array = Array.from({ length }, (_, index) => index);
    return Random.shuffle(array)[0];
  },
});

module.exports = Shuffler;
