const { Console } = require("@woowacourse/mission-utils");
const { COACH_NAME, HATE_FOOD } = require("../constants/Messages");

const InputView = {
  readCoachNameInput(callbackFunction) {
    Console.readLine(COACH_NAME.INPUT, (coachNameInput) => {
      callbackFunction(coachNameInput);
    });
  },

  readHateFoodInput(singleCoachName, callbackFunction) {
    Console.readLine(`\n${singleCoachName}${HATE_FOOD.INPUT}`, (coachNameInput) => {
      callbackFunction(singleCoachName, coachNameInput);
    });
  },
};

module.exports = InputView;
