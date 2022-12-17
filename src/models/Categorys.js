const Gategory = require('./Gategory');

class Gategorys {
  #list = [];
  #allCategorys = [];
  #allMenus = [];

  addGategorys(categorys) {
    let count = 1;
    for (let [category, menus] of Object.entries(categorys)) {
      this.#list.push(new Gategory([category, menus, count]));
      this.#allCategorys.push(category);
      this.#addAllMenus(menus);
      count += 1;
    }
  }

  #addAllMenus(menus) {
    menus.split(',').forEach((menu) => this.#allMenus.push(menu));
  }
}

module.exports = Gategorys;
