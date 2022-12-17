const Coach = require('../Model/Coach');
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
    //TODO: try catch & validate
    Validate.names(names);
    this.createCoach(names);
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
    //TODO: try catch
    try {
      Validate.noMenu(menus);
      Coach.addNoFood(menus);
      Coach.addInputCount();
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
