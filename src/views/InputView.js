const MissionUtils = require('@woowacourse/mission-utils');
const { READ_MESSAGE } = require('../utils/constants');

const InputView = {
  readCoaches(setCoaches) {
    MissionUtils.Console.readLine(READ_MESSAGE.readCoaches, (answer) => {
      setCoaches(answer);
    });
  },
};

module.exports = InputView;
