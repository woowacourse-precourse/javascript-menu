const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/messages.constants');
const ERROR_MESSAGE = require('../constants/error.constants');
const refiner = require('../utils/refiner');
const validator = require('../utils/validatior');

class View {
  constructor() {
    this.io = Console;
  }

  getCoaches(callback) {
    this.io.readLine(MESSAGE.INPUT.COACH_NAME, (input) => {
      try {
        const coaches = refiner.stringToArray(input, MESSAGE.INPUT.DELIMITER);
        if (!validator.isVlaidCoachNames(coaches)) {
          throw new Error(ERROR_MESSAGE.INVALID_COACHES_NAMES);
        }
        callback(coaches);
      } catch (error) {
        this.io.print(error.message);
        this.getCoaches(callback);
      }
    });
  }

  getHates(coachName, callback) {
    this.io.readLine(`${coachName}${MESSAGE.INPUT.CAN_NOT_EAT_FOOD_LIST}`, (input) => {
      try {
        const hateFoods = refiner.stringToArray(input, MESSAGE.INPUT.DELIMITER);
        callback(hateFoods);
      } catch (error) {
        this.io.print(error.message);
        this.getHates(coachName, callback);
      }
    });
  }

  showServiceStart() {
    this.io.print(MESSAGE.SERVICE.START);
  }

  showRecommands(recommands) {
    this.io.print(recommands);
  }
}

module.exports = View;
