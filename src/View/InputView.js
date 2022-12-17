const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constant");

const InputView = {
  readCoachesName(coachesName) {
    Console.readLine(INPUT_MESSAGE.inputCoachesMessage, (userName) => {
      coachesName(userName.split(','))
    })
  },
  

  readCoachHateMenu(coache,coachHateMenu) {
    Console.readLine(INPUT_MESSAGE.inputCoachHateMenuMessage(coache), (menuStr) => {
      coachHateMenu(menuStr.split(','))
    })
  }
};

module.exports = InputView
