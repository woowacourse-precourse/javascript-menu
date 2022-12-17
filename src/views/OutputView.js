const Console = require('../utils/Console');
const { MESSAGE_SYSTEM } = require('../constants/messages');

const OutputView = {
  printStart() {
    Console.print(MESSAGE_SYSTEM.START);
  },

  printError(error) {
    Console.print(error);
  },

  printRecommendedMenu(menu) {
    // Console.print();
  },
};

module.exports = OutputView;
