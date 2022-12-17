class Category {
  #category;
  #menuList;
  #idx;

  constructor([category, menuList, idx]) {
    this.#category = category;
    this.#menuList = menuList.split(',').map((menu) => {
      if (menu[0] === ' ') menu = menu.slice(1);
    });
    this.#idx = idx;
  }

  getCorrectCategory(categoryNum) {
    return this.#idx === categoryNum;
  }

  getMenuList() {
    return this.#menuList;
  }
}

module.exports = Category;
