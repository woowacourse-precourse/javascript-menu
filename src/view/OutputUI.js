const MissionUtils = require('@woowacourse/mission-utils');

class OutputUI {
  print(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = OutputUI;
