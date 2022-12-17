const { Random } = require('@woowacourse/mission-utils');

const shuffle = (args) => {
  const array = Array.from({ length: args.length }).map((_, index) => index + 1);
  const randoms = Random.shuffle(array);

  const shuffledOrigin = args.map((_, index, origin) => origin[randoms[index + 1]]);

  return shuffledOrigin;
};

module.exports = shuffle;
