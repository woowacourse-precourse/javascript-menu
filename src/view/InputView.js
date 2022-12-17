const { INPUT_MESSAGES } = require('../constants/messages');
const { readLine } = require('../utils/mission');

const InputView = {
  readCoachName(callback) {
    return readLine(INPUT_MESSAGES.name, callback);
  },
};

module.exports = InputView;
