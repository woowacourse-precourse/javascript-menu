MenuServiceModel = class {
  #names;
  #dislikes;

  constructor() {
    this.#dislikes = [];
  }

  setCoachName(names) {
    this.#names = names;
  }

  setCoachDislike([name, menus]) {
    this.#dislikes.push([name, menus]);
  }

  getCoachName() {
    return this.#names;
  }

  getDislike() {
    return this.#dislikes;
  }
};

module.exports = MenuServiceModel;
