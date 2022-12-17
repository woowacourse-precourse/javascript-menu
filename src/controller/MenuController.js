const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Category = require('../model/Category');
const Menu = require('../model/Menu');

class MenuController {
  #categoryList;

  #coachList;

  #noMenuAllList;

  constructor() {
    this.#categoryList = [];
    this.#coachList = [];
    this.#noMenuAllList = {};
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
    this.#noMenuAllList = noMenuAllList;
    this.recommendCategory();
  }

  recommendCategory() {
    const categories = new Category();
    const categoryList = categories.recommend();
    this.#categoryList = categoryList;
    this.recommendMenu();
  }

  recommendMenu() {
    const menuTool = new Menu(
      this.#categoryList,
      this.#coachList,
      this.#noMenuAllList,
    );
    this.#coachList.forEach(coach => {
      const menus = [];
      const menu = menuTool.recommend();
      menus.push(menu);
      console.log('s', menus);
    });
    console.log(menu);
  }
}

module.exports = MenuController;
