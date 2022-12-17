const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/constants');

const InputView = {
  readCoachNames(callback) {
    Console.readLine(INPUT_MESSAGE.enterCoachNames, callback);
  },

  readHateFoods(coachName, callback) {
    Console.readLine(INPUT_MESSAGE.enterHateFoods(coachName), callback);
  },
};

module.exports = InputView;
