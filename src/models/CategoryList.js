const Category = require('./Category');

class CategoryList {
  #list = [];
  #everyCategoryList = [];
  #everyMenuList = [];

  addCategoryList(categoryList) {
    let count = 1;

    for (let [category, menuList] of Object.entries(categoryList)) {
      this.#list.push(new Category([category, menuList, count]));
      this.#everyCategoryList.push(category);
      this.addMenuList(menuList);
      count++;
    }
  }

  addMenuList(menuList) {
    menuList.split(',').forEach((menu) => this.#everyMenuList.push(menu));
  }
}

module.exports = CategoryList;
