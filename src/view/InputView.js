const { Console } = require('@woowacourse/mission-utils');
const { QUESTION } = require('../constant/Constant');

const InputView = {
  readNames(callback) {
    Console.readLine(QUESTION.ENTER_NAMES, callback);
  },
};

module.exports = InputView;
