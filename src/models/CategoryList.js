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
      this.#addMenuList(menuList);
      count++;
    }
  }

  #addMenuList(menuList) {
    menuList.split(',').forEach((menu) => {
      if (menuList[0] === ' ') menu = menu.slice(1);
      this.#everyMenuList.push(menu);
    });
  }

  getCategoryMenuList(categoryNum) {
    const category = this.#list.filter((category) => {
      category.getCorrectCategory(categoryNum)[0];

      return category.getMenuList();
    });
  }
}

module.exports = CategoryList;
