const { Console } = require('@woowacourse/mission-utils');

const MenuController = class {
  #members;

  #io;

  #menuRecommender;

  constructor(members, io, menuRecommender) {
    this.#members = members;
    this.#io = io;
    this.#menuRecommender = menuRecommender;
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
    // TODO: 여러번 입력받지 못하는 오류를 수정해야 한다.
    names.forEach((name) =>
      this.#io.readHateMenus(name, this.#saveHateMenus.bind(this))
    );
  }

  #saveHateMenus(hateMenus) {
    this.#members.pushHateMenus(hateMenus);
    this.#printResult();
  }

  #printResult() {
    const recommendList = this.#menuRecommender(names, hateMenus);

    this.#io.printRecommendMenu(recommendList);
    this.#quit();
  }

  #quit() {
    this.#io.printClosing();
    this.#io.close();
  }
};

module.exports = MenuController;
