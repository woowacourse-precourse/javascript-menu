const { Console, Random } = require('@woowacourse/mission-utils');

const print = (message) => {
  return Console.print(message);
};

const readLine = (query, callback) => {
  return Console.readLine(query, callback);
};

const close = () => {
  return Console.close();
};

const pickNumberInRange = (start, end) => {
  return Random.pickNumberInRange(start, end);
};

const shuffle = (array) => {
  return Random.shuffle(array)[0];
};

module.exports = {
  print,
  readLine,
  close,
  pickNumberInRange,
  shuffle,
};
