const { Console } = require('@woowacourse/mission-utils');

const MenuController = class {
  #members;

  #io;

  constructor(members, io) {
    this.#members = members;
    this.#io = io;
  }

  start() {
    this.#io.printOpening();
    this.#readNames();
  }

  #readNames() {
    this.#io.readNames(this.#saveNames.bind(this));
  }

  #saveNames(names) {
    this.#members.saveNames(names);
    this.#readHateMenus(names);
  }

  #readHateMenus(names) {
    names.forEach((name) =>
      this.#io.readHateMenus(name, this.#saveHateMenus.bind(this))
    );
  }

  #saveHateMenus(hateMenus) {
    this.#members.pushHateMenus(hateMenus);
    this.#printResult();
  }

  #printResult() {
    this.#io.printRecommendMenu();
    this.#quit();
  }

  #quit() {
    this.#io.printClosing();
    this.#io.close();
  }
};

module.exports = MenuController;
