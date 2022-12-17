const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/message");
const Validation = require("../Validation");

const InputView = {
  readCoachNames(callback) {
    Console.readLine(INPUT_MESSAGE.coachNames, (coachNames) => {
      try {
        Validation.coachNames(coachNames);
        callback(coachNames);
      } catch {
        this.readCoachNames(callback);
      }
    });
  },

  readNotEatMenu(coachName, callback) {
    Console.readLine(INPUT_MESSAGE.notEatMenu(coachName), (menus) => {
      try {
        Validation.notEatMenu(menus);
        callback(coachName, menus);
      } catch {
        this.readNotEatMenu(callback);
      }
    });
  },
};

module.exports = InputView;
