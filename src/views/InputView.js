const Console = require('../utils/Console');
const { MESSAGE_QUERY } = require('../constants/messages');

const InputView = {
  read(query, callback) {
    Console.readline(query, callback);
  },
};

module.exports = InputView;
