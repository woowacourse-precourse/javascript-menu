const Coach = require('../Model/Coach');
const Validate = require('../Model/Validate');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

class MenuController {
  start() {
    OutputView.print('점심 메뉴 추천을 시작합니다.\n');
    this.readCoaches();
  }

  // 코치 이름 입력받기
  readCoaches() {
    InputView.readCoachNames(this.validateCoach.bind(this));
  }

  // 유효성 검사
  validateCoach(names) {
    try {
      Validate.names(names);
      this.createCoach(names);
    } catch ({ message }) {
      OutputView.print(message);
    }
  }

  // 코치 생성
  createCoach(names) {
    Coach.create(names);
    this.getCoach();
  }

  // 코치 이름 받기(카운팅)
  getCoach() {
    const coachName = Coach.getName();
    this.readNoMenu(coachName);
  }

  readNoMenu(coachName) {
    InputView.readNoMenu(coachName, this.validateMenu.bind(this));
  }

  validateMenu(menus) {
    try {
      Validate.noMenu(menus);
      Coach.addNoFood(menus);
    } catch ({ message }) {
      OutputView.print(message);
    }
    this.checkAllInput();
  }

  checkAllInput() {
    const inputCount = Coach.getInputCount();
    const coachCount = Coach.getCoachCount();

    if (inputCount === coachCount) {
      this.printResult();
    } else {
      this.getCoach();
    }
  }
}

module.exports = MenuController;
