class CategoryModel {
  #categories;
  #coachNames;

  constructor() {
    this.#categories = [];
    this.#coachNames = [];
  }

  getCoachNames() {
    return this.#coachNames;
  }

  setCoachNames(newCoachNames) {
    this.#coachNames = newCoachNames;
  }
}

module.exports = CategoryModel;
