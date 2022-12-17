class Category {
  #name;
  #menus;

  constructor(name, menus) {
    this.#name = name;
    this.#menus = this.#convertMenus(menus);
  }

  #convertMenus(menus) {
    return menus.replace(/ /g, '').split(',');
  }
}

module.exports = Category;
