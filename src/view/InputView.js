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
      this.handleWrongCoachNamesException(input);
      callback(input.split(SERVICE_SETTINGS.separationCriteria));
    } catch (error) {
      Console.print(error);
      this.readCoachName(callback);
    }
  },

  handleWrongCoachNamesException(input) {
    const names = input.split(SERVICE_SETTINGS.separationCriteria);
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

  readExcludeMenu(name, callback) {
    Console.readLine(MESSAGES.excludeMenu(name), (input) => {
      this.validateExcludeMenus(name, input, callback);
    });
  },

  validateExcludeMenus(name, input, callback) {
    try {
      this.handleWrongExcludeMenus(input);
      callback(input.split(SERVICE_SETTINGS.separationCriteria));
    } catch (error) {
      Console.print(error);
      this.readExcludeMenu(name, callback);
    }
  },

  handleWrongExcludeMenus(input) {
    const menus = input.split(SERVICE_SETTINGS.separationCriteria);
    this.handleWrongNumberOfMenusException(menus);
  },

  handleWrongNumberOfMenusException(menus) {
    const numberOfMenus = menus.length;
    if (numberOfMenus > SERVICE_SETTINGS.maxNumberOfMenus) {
      throw ERROR_MESSAGES.numberOfMenus;
    }
  },
};

module.exports = InputView;
