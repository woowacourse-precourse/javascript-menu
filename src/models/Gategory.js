class Gategory {
  #index;
  #category;
  #menus;

  constructor([category, menus, index]) {
    this.#index = index;
    this.#category = category;
    this.#menus = menus.split(',').map((menu) => {
      if (menu[0] === ' ') menu = menu.slice(1);
      return menu;
    });
  }

  isMe(categoryNumber) {
    return this.#index === categoryNumber;
  }

  getMenu() {
    return this.#menus;
  }
}

module.exports = Gategory;
