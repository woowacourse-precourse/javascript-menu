const { Console } = require("@woowacourse/mission-utils");
const { ANNOUNCEMENT_MESSAGE } = require("../Constant/Constant");
const Validation = require("../Utils/Validation");

const InputView = {
  readCoaches(callback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.GET_COACH_NAMES, (userInput) => {
      Validation.isCoaches(userInput);
      callback(userInput);
    });
  },
};

module.exports = InputView;
