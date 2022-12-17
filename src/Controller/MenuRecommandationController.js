const Menus = require('../Model/Menus');
const MenuService = require('../Service/MenuService');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const ViewController = require('./ViewController');

class MenuRecommandationController {
  #menuService;

  constructor() {
    this.#menuService = new MenuService();
  }

  run() {
    this.startService();
  }

  startService() {
    this.#menuService.pickCategories();

    OutputView.printServiceStart();
    this.readCoachNames();
  }

  readCoachNames() {
    InputView.readCoachNames((coachNames) => {
      this.createCoaches(coachNames);
    });
  }

  createCoaches(coachNames) {
    this.#menuService.createCoaches(coachNames);

    this.readHateMenus(this.#menuService.getCoaches(), 0);
  }

  readHateMenus(coaches, index) {
    if (coaches.length === index) return this.recommand();

    const coach = coaches[index];

    InputView.readHateMenus(coach.getName(), (hateMenus) => {
      this.checkHateMenusInMenus(hateMenus);

      coach.setHateMenus(hateMenus);

      this.readHateMenus(coaches, index + 1);
    });
  }

  checkHateMenusInMenus(hateMenus) {
    hateMenus.forEach((hateMenu) => {
      if (hateMenu !== '' && !Menus.hasMenu(hateMenu)) {
        throw new Error('존재하지 않는 메뉴입니다.');
      }
    });
  }

  recommand() {
    this.#menuService.recommand();
    this.endService();
  }

  endService() {
    OutputView.printMenuResult(
      ViewController.buildMenuResult(this.#menuService.getResult()),
    );
    OutputView.printServiceEnd();
  }
}

module.exports = MenuRecommandationController;
