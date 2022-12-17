const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');
const Validator = require('./Validator');

const InputView = {

  readCoachNames(callback) {
    MissionUtils.Console.readLine(
      MESSAGE.COACH_NAMES,
      Validator.coachNames(callback, {
        onError: this.readCoachNames.bind(this),
      }),
    );
  },

  readHateFood(name, callback) {
    MissionUtils.Console.readLine(
      `${name}${MESSAGE.HATES_FOOD}`,
      (foodList) => {
        callback(foodList);
      },
    );
  },
};

module.exports = InputView;
