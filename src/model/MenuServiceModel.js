MenuServiceModel = class {
  #names;
  #dislikes;
  #weekCategories;

  constructor() {
    this.#names;
    this.#dislikes = [];
    this.#weekCategories = [];
  }

  setCoachName(names) {
    this.#names = [...names];
  }

  setCoachDislike([name, menus]) {
    this.#dislikes.push([name, menus]);
  }

  setWeekCategories(category) {
    this.#weekCategories.push(category);
  }

  getCoachName() {
    return this.#names;
  }

  getCoachDislike() {
    return this.#dislikes;
  }

  getWeekCategories() {
    return this.#weekCategories;
  }
};

module.exports = MenuServiceModel;
