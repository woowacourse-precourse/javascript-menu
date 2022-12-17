const { Console } = require('@woowacourse/mission-utils');
const { SERVICE_SETTINGS } = require('../constant/ServiceSettings');
const { MESSAGES, ERROR_MESSAGES } = require('../constant/Messages');

const InputView = {
  readCoachName(callback) {
    Console.readLine(MESSAGES.coachName, (input) => {
      this.validateCoachNames(input, callback);
    });
  },

  validateCoachNames(input, callback) {
    try {
      const names = input.split(SERVICE_SETTINGS.separationCriteria);
      this.handleWrongCoachNamesException(names);
      callback(names);
    } catch (error) {
      Console.print(error);
      this.readCoachName(callback);
    }
  },

  handleWrongCoachNamesException(names) {
    this.handleWrongNumberCoachesException(names);
    this.handleWrongNameLengthException(names);
  },

  handleWrongNumberCoachesException(names) {
    const numberOfCoaches = names.length;
    if (numberOfCoaches < SERVICE_SETTINGS.minNumberOfCoaches) {
      throw ERROR_MESSAGES.lessNumberOfCoaches;
    }

    if (numberOfCoaches > SERVICE_SETTINGS.maxNumberOfCoaches) {
      throw ERROR_MESSAGES.moreNumberOfCoaches;
    }
  },

  handleWrongNameLengthException(names) {
    names.forEach((name) => {
      if (name.length < SERVICE_SETTINGS.minLengthOfCoachesName) {
        throw ERROR_MESSAGES.lengtOfCoachName;
      }

      if (name.length > SERVICE_SETTINGS.maxLengthOfCoachesName) {
        throw ERROR_MESSAGES.lengtOfCoachName;
      }
    });
  },
};

module.exports = InputView;
