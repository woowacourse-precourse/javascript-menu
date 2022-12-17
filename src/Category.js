const Menu = require('./Menu');
const { CATEGORY } = require('./Constants');

class Category {
  #menuList = [];

  constructor(sampleMenu) {
    this.#menuList = CATEGORY.map((category) => new Menu(category));
    this.#menuList.forEach((menu) => {
      menu.setList(sampleMenu[menu.name]);
    });
  }

  getMenuList() {
    return this.#menuList;
  }

  pickValidCategory(randomCategoryMaker) {
    const category = randomCategoryMaker();
    if (Category.isValidCategory(this.#menuList[category])) {
      this.#menuList[category].count += 1;
      return category;
    }
    this.pickVaildCategory(randomCategoryMaker);
  }

  static isValidCategory(category) {
    if (category.count < 3) return true;
    return false;
  }
}

module.exports = Category;
