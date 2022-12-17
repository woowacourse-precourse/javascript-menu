class Category {
  #category;
  #menuList = [];
  #idx;

  constructor([category, menuList, idx]) {
    this.#category = category;
    this.#menuList = menuList.split(',');
    this.#idx = idx;
  }
}

module.exports = Category;
