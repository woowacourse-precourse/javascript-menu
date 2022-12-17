const IO = require('../utils/IO');
const { MESSAGE } = require('../data/Constants');

const InputView = {
  inputCoachName(callback) {
    IO.input(MESSAGE.INPUT_COACH, (names) => callback(names));
  },
  inputCantEatMenu(coachName, callback) {
    IO.input(`\n${coachName}${MESSAGE.INPUT_CANT_EAT}`, (menus) =>
      callback(menus),
    );
  },
};

module.exports = InputView;
