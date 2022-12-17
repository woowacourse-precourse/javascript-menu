const { Console } = require("@woowacourse/mission-utils");
const { COACH_NAME } = require("../constants/Messages");

const InputView = {
  readCoachNameInput(callbackFunction) {
    Console.readLine(COACH_NAME.INPUT, (coachNameInput) => {
      callbackFunction(coachNameInput);
    });
  },
};

module.exports = InputView;
