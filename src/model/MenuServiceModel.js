MenuServiceModel = class {
  #names;
  #dislikes;

  constructor() {
    this.#names;
    this.#dislikes = [];
  }

  setCoachName(names) {
    this.#names = [...names];
  }

  setCoachDislike([name, menus]) {
    this.#dislikes.push([name, menus]);
  }

  getCoachName() {
    return this.#names;
  }

  getCoachDislike() {
    return this.#dislikes;
  }
};

module.exports = MenuServiceModel;
