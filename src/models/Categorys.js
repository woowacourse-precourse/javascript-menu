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

  isExistMenu(dislikeFoods) {
    dislikeFoods = dislikeFoods.split(',');
    return dislikeFoods.every((dislikeFood) =>
      this.#allMenus.includes(dislikeFood)
    );
  }

  #addAllMenus(menus) {
    menus.split(',').forEach((menu) => {
      if (menu[0] === ' ') menu = menu.slice(1);
      this.#allMenus.push(menu);
    });
  }
}

module.exports = Gategorys;
