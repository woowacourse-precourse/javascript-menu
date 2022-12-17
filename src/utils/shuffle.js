const { Random } = require('@woowacourse/mission-utils');

const shuffle = (args) => {
  const array = Array.from({ length: args.length }).map((_, index) => index);
  const randoms = Random.shuffle(array);
  return args.map((_, index, origin) => origin[randoms[index]]);
};

module.exports = shuffle;
