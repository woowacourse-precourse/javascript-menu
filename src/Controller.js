const { MESSAGE } = require("./constants");
const MenuRecommender = require("./MenuRecommender");
const { makeArray } = require("./util/ArrayMaker");
const MenuValidator = require("./validation/MenuValidator");
const NameValidator = require("./validation/NameValidator");
const InputView = require("./views/InputView");
const OutputView = require("./views/OutputView");

class Controller {
  #namesArr;
  #menuAskingIndex = 0;
  #menuRecommender;

  constructor() {
    this.#menuRecommender = new MenuRecommender();
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
    this.askName();
  }

  askName() {
    InputView.readInput(MESSAGE.ASK_NAME, this.askNameCallback.bind(this));
  }

  askNameCallback(input) {
    let namesArr = makeArray(input);
    try {
      new NameValidator(namesArr);
      this.#namesArr = namesArr;
      this.askMenu();
    } catch (error) {
      OutputView.printMessage(error);
      this.askName();
    }
  }

  askMenu() {
    const namesArr = this.#namesArr;
    if (this.#menuAskingIndex < namesArr.length) {
      InputView.readInput(
        namesArr[this.#menuAskingIndex] + MESSAGE.ASK_MENU,
        this.askMenuCallback.bind(this)
      );
      return;
    }
    this.returnResult();
  }

  askMenuCallback(input) {
    const coachName = this.#namesArr[this.#menuAskingIndex];
    const menuArr = input === "" ? [] : makeArray(input);
    try {
      new MenuValidator(menuArr);
      this.#menuRecommender.setNoNoMenus(coachName, menuArr);
      this.#menuAskingIndex++;
    } catch (error) {
      OutputView.printMessage(error);
    } finally {
      this.askMenu();
    }
  }

  returnResult() {
    console.log("결과");
  }
}
module.exports = Controller;
