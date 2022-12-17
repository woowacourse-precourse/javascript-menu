const Category = require('../model/Category');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuController {
  #categoryList;

  #coachList;

  constructor() {
    this.#categoryList = [];
    this.#coachList = [];
  }

  start() {
    OutputView.printStart();
    this.inputCoachName();
  }

  inputCoachName() {
    const nameList = InputView.readCoachName();
    this.#coachList = nameList.split(',');
    this.inputNoMenu(nameList);
  }

  inputNoMenu(nameList) {
    const coachList = nameList.split(',');
    const noMenuAllList = {};
    coachList.forEach(coach => {
      console.log('coco', coach);
      const noMenus = InputView.readNoMenu(coach);
      console.log('asdf', noMenus);
      noMenuAllList[coach] = noMenus;
    });
    console.log('no', noMenuAllList);
    this.recommendCategory();
  }

  recommendCategory() {
    const categories = new Category();
    const categoryList = categories.recommend();
    this.#categoryList = categoryList;
  }

  recommendMenu() {}
}

module.exports = MenuController;
