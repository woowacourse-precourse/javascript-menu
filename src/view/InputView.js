const { input } = require('../utils/utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readCoaches(callback) {
    input(MESSAGE.inputCoaches, callback);
  },
};

module.exports = InputView;
