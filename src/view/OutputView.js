const { OUTPUT_MESSAGES } = require('../constants/messages');
const { print, close } = require('../utils/mission');

const OutputView = {
  printStart(message) {
    print(message);
  },

  printResult(coachName, categories, menus) {
    print(OUTPUT_MESSAGES.printCategory(categories));
    print(OUTPUT_MESSAGES.printCoachMenu(coachName, menus));
    print(OUTPUT_MESSAGES.done);
    this.quit();
  },

  printError(error) {
    print(error);
  },
};

module.exports = OutputView;
