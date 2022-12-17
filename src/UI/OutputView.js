const MissionUtils = require('@woowacourse/mission-utils');
const { Message } = require('../Config');

const OutputView = {
  printStart() {
    MissionUtils.Console.print(Message.START);
  },

  printResultHeader(categories) {
    MissionUtils.Console.print(Message.RESULT);
    MissionUtils.Console.print(Message.RESULT_DAY);
    MissionUtils.Console.print(Message.resultCategory(categories));
  },

  printResultMenu(name, menus) {
    MissionUtils.Console.print(Message.resultCoach(name, menus));
  },

  printFinished() {
    MissionUtils.Console.print(Message.FINISHED);
  },
};

module.exports = OutputView;
