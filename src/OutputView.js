const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');

const OutputView = {
  printIntro() {
    this.printMessage(MESSAGE.INTRO);
  },

  printMessage(message) {
    MissionUtils.Console.print(message);
  },
};

module.exports = OutputView;
