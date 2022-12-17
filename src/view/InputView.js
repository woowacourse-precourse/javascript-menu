const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constant/Constant");

const InputView = {
  readCoachNames(callback) {
    Console.readLine(INPUT_MESSAGE.NAMES, callback);
  },

  readNoEatMenu(coachName, callback) {
    Console.readLine(INPUT_MESSAGE.NO_MENU(coachName), callback);
  },
};

module.exports = InputView;
