const { input } = require('../utils/utils');
const { MESSAGE, INPUT_HATE_MENU } = require('../utils/constants');

const InputView = {
  readCoaches(callback) {
    input(MESSAGE.inputCoaches, callback);
  },

  readHateMenu(coachName, callback) {
    input(INPUT_HATE_MENU(coachName), callback);
  },
};

module.exports = InputView;
