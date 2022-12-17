class Gategory {
  #index;
  #category;
  #menus = [];

  constructor([category, menus, index]) {
    this.#index = index;
    this.#category = category;
    this.#menus = menus.split(',');
  }
}

module.exports = Gategory;
