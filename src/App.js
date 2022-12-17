const Category = require("./model/Category.js");
const Coach = require("./model/Coach.js");
const CouchMenu = require("./model/CouchMenu.js");
const { makeCategory } = require("./utils/CategoryMaker.js");
const InputView = require("./view/InputView.js");
const OutputView = require("./view/OutputView.js");

class App {
  #coachNames = [];
  #coachMenus = [];
  #categories;

  constructor() {
    this.#categories = new Category();
  }

  play() {
    // this.#categories = makeCategory();
    OutputView.printStart();
    this.#readCoachNames();
  }

  #readCoachNames() {
    InputView.readCoachNames(this.#readCoachNamesCallback);
  }
  #readCoachNamesCallback = (names) => {
    try {
      this.#coachNames = new Coach(names).getData();
      this.#coachMenus = new Array(names.length);
      this.#readAllCouchNotWantMenu();
    } catch (err) {
      OutputView.printError(err.message);
      this.#readCoachNames();
    }
  };

  #readAllCouchNotWantMenu() {
    this.#readCoachNotWantMenu(this.#coachNames[0], 0);
  }
  #readCoachNotWantMenu(coachName, idx) {
    InputView.readCoachNotWantMenu(coachName, (notWantMenu) => {
      try {
        this.#coachMenus[idx] = new CouchMenu(coachName, notWantMenu);
        const newIdx = idx + 1;
        const newCoachName = this.#coachNames[newIdx];
        const coachNamesLen = this.#coachNames.length;
        const isValidIdx = newIdx < coachNamesLen;
        if (isValidIdx) this.#readCoachNotWantMenu(newCoachName, newIdx);
        if (!isValidIdx) this.#controlMenus();
      } catch (err) {
        OutputView.printError(err.message);
        this.#readCoachNotWantMenu(coachName, idx);
      }
    });
  }

  #controlMenus() {
    for (let i = 0; i < 5; i++) {
      this.#updateCategory();
      const category = this.#categories.getData()[i];
      for (let j = 0; j < this.#coachNames.length; j++) {
        this.#coachMenus[j].updateMenu(category);
      }
    }
  }

  #updateCategory() {
    this.#categories.generateCategory();
  }
}

module.exports = App;
