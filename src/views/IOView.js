const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { Console } = require('@woowacourse/mission-utils');

const IOView = {
  OutputView,
  InputView,

  printError(error) {
    Console.print(`\n${error}`);
  },

  quit() {
    Console.print('\n추천을 완료했습니다.');
    Console.close();
  },
};

module.exports = IOView;
