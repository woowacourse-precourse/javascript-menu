const { MESSAGE, CATEGORY } = require("./constants");
const MenuRecommender = require("./MenuRecommender");
const { makeArray } = require("./util/ArrayMaker");
const { getDivision, getMap } = require("./util/MapMaker");
const MenuValidator = require("./validation/MenuValidator");
const NameValidator = require("./validation/NameValidator");
const InputView = require("./views/InputView");
const OutputView = require("./views/OutputView");
const { Random } = require("@woowacourse/mission-utils");

const MAX_CATEGORY_LENGTH = 5;

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

  selectCategory() {
    return CATEGORY[Random.pickNumberInRange(1, 5)];
  }

  getCategories() {
    let categories = [];
    while (categories.length < MAX_CATEGORY_LENGTH) {
      const category = this.selectCategory();
      if (categories.filter((el) => el === category).length > 2) {
        break;
      }
      categories.push(category);
    }
    return categories;
  }

  returnResult() {
    const division = getDivision();
    const categories = this.getCategories();
    const categoryLine = getMap([CATEGORY.TITLE, ...categories]);
    const result = [MESSAGE.RESULT_START, division, categoryLine];
    OutputView.printResult(result);
  }
}
module.exports = Controller;
