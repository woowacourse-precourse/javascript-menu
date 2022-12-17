const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constant");

const InputView = {
  readCoachesName(coachesName) {
    Console.readLine(INPUT_MESSAGE.inputCoachesMessage, (nameStr) => coachesName(nameStr.split(',')))
  }
};

module.exports = InputView;
