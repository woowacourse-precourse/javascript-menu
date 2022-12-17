const IGameCtrl = require('./IGameCtrl');
const { NameValidator } = require('../validators');

const { ERROR_MESSAGE } = require('../constants');

class GameCtrl extends IGameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
    if (this.constructor === GameCtrl) {
      throw new Error(ERROR_MESSAGE.abstract_class);
    }
  }

  start() {
    this.view.printStartMessage();
    this.gameProcess();
  }

  gameProcess() {
    this.#inputCoachName();
  }

  // 입력
  // 코치의 이름을 입력해 주세요. (, 로 구분)
  // 토미,제임스,포코
  #inputCoachName() {
    this.view.readCoachesName(nameList => {
      const splittedNameList = nameList.split(',');
      NameValidator.validateList(splittedNameList);

      this.model.setCoachesName(splittedNameList);
      // this.#getUserCommand();
    });
  }

  end() {}
}

module.exports = GameCtrl;
