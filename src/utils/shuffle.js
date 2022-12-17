const { Random } = require('@woowacourse/mission-utils');

const shuffle = (args) => {
  const array = Array.from({ length: args.length }).map((_, index) => index);
  const randoms = Random.shuffle(array);
  const shuffledOrigin = args.map((_, index, origin) => origin[randoms[index]]);

  return shuffledOrigin;
};

module.exports = shuffle;
