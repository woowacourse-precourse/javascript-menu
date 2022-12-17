const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {

  print(message) {
    MissionUtils.Console.print(message);
  },

};
module.exports = { OutputView };
