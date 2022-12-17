const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/message");
const Validation = require("../Validation");

const InputView = {
  readCoachNames(callback) {
    Console.readLine(INPUT_MESSAGE.coachNames, (coachNames) => {
      //Validation.coachNames(coachNames);
      callback(coachNames);
    });
  },

  /* readNotEatMenu(coachName, callback) {
    Console.readLine(INPUT_MESSAGE.notEatMenu(coachName), (coachNames) => {
      callback(coachNames);
    });
  }, */
};

module.exports = InputView;
