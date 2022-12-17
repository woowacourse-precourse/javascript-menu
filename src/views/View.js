const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { Console } = require('@woowacourse/mission-utils');

const View = {
  OutputView,
  InputView,

  printError(error) {
    Console.print(`\n${error}`);
  },
};

module.exports = View;
