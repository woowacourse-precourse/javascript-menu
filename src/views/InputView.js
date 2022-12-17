const Console = require('../utils/Console');
const { MESSAGE_QUERY } = require('../constants/messages');

const InputView = {
  readNames(enterNames) {
    Console.readLine(MESSAGE_QUERY.NAMES, enterNames);
  },
};

module.exports = InputView;
