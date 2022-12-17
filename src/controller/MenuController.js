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
      const noMenus = InputView.readNoMenu(coach);
      noMenuAllList[coach] = noMenus;
    });
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
    const allMenu = [];
    this.#coachList.forEach(coach => {
      console.log(coach);
      const coachMenu = [];
      coachMenu.push(coach);
      this.makeMenuList(coachMenu, coach);
      console.log(coachMenu);
      allMenu.push(coachMenu);
    });
    // console.log(menu);
    console.log('a', allMenu);
  }

  makeMenuList(coachMenu, coach) {
    const menuTool = new Menu(
      this.#categoryList,
      // this.#coachList,
      this.#noMenuAllList,
    );
    console.log(coach, coa);
    const menu = menuTool.recommend();
    console.log('hi', menu);
    if (this.checkMenu(menu, coachMenu, coach)) {
      coachMenu.push(menu);
    }
    if (!this.checkMenu(menu, coachMenu, coach)) {
      this.makeMenuList();
    }
  }

  checkMenu(menu, coachMenu, coach) {
    this.isDuplicate(menu, coachMenu);
    this.isNoMenu(menu, coach);
  }

  isDuplicate(menu, coachMenu) {
    if (coachMenu.includes(menu)) {
      return false;
    }
    return true;
  }

  isNoMenu(menu, coach) {
    if (this.#noMenuAllList[coach].includes(menu)) {
      return false;
    }
    return true;
  }
}

module.exports = MenuController;
