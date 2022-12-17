const MissionUtils = require('@woowacourse/mission-utils');
const { READ_MESSAGE } = require('../utils/constants');
const { isValidCoaches } = require('../utils/coachValidation');

const InputView = {
  readCoaches(setCoaches) {
    MissionUtils.Console.readLine(READ_MESSAGE.readCoaches, (answer) => {
      try {
        isValidCoaches(answer);
        setCoaches(answer);
      } catch (error) {
        InputView.readCoaches(setCoaches);
      }
    });
  },
};

module.exports = InputView;
