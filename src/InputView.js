const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');

const InputView = {

  readCoachNames(callback) {
    MissionUtils.Console.readLine(
      MESSAGE.COACH_NAMES,
      (names) => {
        callback(names);
      },
    );
  },

};

module.exports = InputView;
