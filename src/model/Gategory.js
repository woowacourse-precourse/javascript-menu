class Gategory {
  #index;
  #category;
  #menus = [];

  constructor([category, menus, index]) {
    this.#index = index;
    this.#category = category;
    this.#menus = menus.split(',');

    console.log(this.#index, this.#category, this.#menus);
  }
}

module.exports = Gategory;
