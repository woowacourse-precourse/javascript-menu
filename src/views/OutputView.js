const Console = require('../utils/Console');
const { MESSAGE_SYSTEM } = require('../constants/messages');

const OutputView = {
  printStart() {
    Console.print(MESSAGE_SYSTEM.START);
  },
};

module.exports = OutputView;
