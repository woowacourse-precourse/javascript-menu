const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLE_MESSAGE } = require('./utils/constants');

const OutputView = {
  printStartMessage() {
    MissionUtils.Console.print(CONSOLE_MESSAGE.start);
  },
};

module.exports = OutputView;
