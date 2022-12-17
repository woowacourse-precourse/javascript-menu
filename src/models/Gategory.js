class Gategory {
  #index;
  #category;
  #menus;
  #recommendedCount = 0;

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

  increaseRecommendedCount() {
    this.#recommendedCount += 1;
  }
}

module.exports = Gategory;
