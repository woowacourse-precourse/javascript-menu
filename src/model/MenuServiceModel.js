MenuServiceModel = class {
  #names;

  setCoachName(names) {
    this.#names = names;
  }

  getCoachName() {
    return this.#names;
  }
};

module.exports = MenuServiceModel;
