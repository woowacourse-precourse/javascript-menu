const { OUTPUT_MESSAGES } = require('../constants/messages');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuController {
  #coachMembers;

  constructor() {}

  start() {
    OutputView.printStart(OUTPUT_MESSAGES.start);
    this.getCoachName();
  }

  getCoachName() {
    const callback = (coachName) => {
      try {
        this.#coachMembers = coachName.split(',');
        // 예외처리 : 코치 이름 2글자 ~ 4글자가 아닌 경우
        // 예외처리 : 코치 2명 이상, 5명 이하가 아닌 경우
        // 예외처리 : 콤마로 구분하지 않는 경우
      } catch (error) {
        console.log(error);
      }
    };

    InputView.readCoachName(callback);
  }
}

module.exports = MenuController;
