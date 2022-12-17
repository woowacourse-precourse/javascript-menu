const Console = require('../utils/Console');
const { MESSAGE_SYSTEM } = require('../constants/messages');

const OutputView = {
  printStart() {
    Console.print(MESSAGE_SYSTEM.START);
  },

  printError(error) {
    Console.print(error);
  },

  printRecommendedMenu(category, coach) {
    Console.print(MESSAGE_SYSTEM.RESULT);
    Console.print(MESSAGE_SYSTEM.WEEK);
    Console.print(category);
    Console.print(coach);
    Console.print('');
    Console.print(MESSAGE_SYSTEM.FINISH);
  },
};

module.exports = OutputView;
