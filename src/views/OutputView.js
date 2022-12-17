const Console = require('../utils/Console');
const { MESSAGE_SYSTEM } = require('../constants/messages');

const OutputView = {
  print(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
