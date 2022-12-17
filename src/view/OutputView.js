const { Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./messages');

const OutputView = Object.freeze({
  printStart() {
    Console.print(MESSAGES.start);
  },
});

module.exports = OutputView;
