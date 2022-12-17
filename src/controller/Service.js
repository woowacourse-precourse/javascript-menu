const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const NamesChecker = require('../utils/NamesChecker');
const HateMenusChecker = require('../utils/HateMenusChecker');
const Convertor = require('../utils/Convertor');
const CoachNames = require('../models/CoachNames');
const CoachHateMenus = require('../models/CoachHateMenus');
const Category = require('../models/Category');
const Menu = require('../models/Menu');

class Service {
  #index;

  #instance = {
    coachNames: null,
    coachHateMenus: null,
    category: null,
    menu: null,
  };

  constructor() {
    OutputView.printStart();
    this.#index = 0;
  }

  start() {
    InputView.readNames(this.#enterNames.bind(this));
  }

  #enterNames(names) {
    if (!NamesChecker.checkInput(names)) {
      this.start();
      return;
    }
    this.#instance.coachNames = new CoachNames(names);
    if (!NamesChecker.check(this.#instance.coachNames.get())) {
      this.start();
      return;
    }

    this.#instance.coachHateMenus = new CoachHateMenus();
    this.#enterHateMenus();
  }

  #enterHateMenus() {
    const names = this.#instance.coachNames.get();

    InputView.readHateMenus(
      names[this.#index],
      this.#checkHateMenusInput.bind(this, names.length)
    );
  }

  #checkHateMenusInput(length, hateMenus) {
    if (!HateMenusChecker.checkInput(hateMenus)) {
      this.#enterHateMenus();
      return;
    }

    this.#setHateMenus(length, hateMenus);
  }

  #setHateMenus(length, hateMenus) {
    this.#instance.coachHateMenus.set(hateMenus);
    if (!HateMenusChecker.check(this.#instance.coachHateMenus.get())) {
      this.#instance.coachHateMenus.pop();
      this.#enterHateMenus();
      return;
    }
    this.#index += 1;
    if (this.#index < length) {
      this.#enterHateMenus();
      return;
    }

    this.#recommendMenu();
  }

  #recommendMenu() {
    this.#instance.category = new Category();
    this.#instance.menu = new Menu();

    const result = this.#instance.menu.generate(
      this.#instance.coachNames.get(),
      this.#instance.coachHateMenus.get(),
      this.#instance.category.get()
    );

    this.#endService(result);
  }

  #endService(result) {
    const printableResult = Convertor.convertResultToPrintable(
      this.#instance.coachNames.get(),
      result
    );
    const printableCategory = Convertor.convertCategoryToPrintable(
      this.#instance.category.get()
    );
    OutputView.printRecommendedMenu(printableCategory, printableResult);
    InputView.close();
  }
}

module.exports = Service;
