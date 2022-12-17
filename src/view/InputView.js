const { INPUT_MESSAGES } = require('../constants/messages');
const { readLine } = require('../utils/mission');

const InputView = {
  readCoachName(callback) {
    return readLine(INPUT_MESSAGES.name, callback);
  },
  readCoachUnableEatMenu(coachName, callback) {
    return readLine(INPUT_MESSAGES.printUnableEatMenu(coachName), callback);
  },
};

module.exports = InputView;
