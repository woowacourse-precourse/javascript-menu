const MissionUtils = require('@woowacourse/mission-utils');
const { WELCOME } = require('../utils/constants');

const OutputView = {

  print(message) {
    MissionUtils.Console.print(message);
  },

  welcome() {
    MissionUtils.Console.print(WELCOME);
  },

};
module.exports = { OutputView };
