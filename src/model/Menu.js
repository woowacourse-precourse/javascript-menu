class Menu {
  constructor(name, categoryName) {
    this.name = name;
    this.category = categoryName;
  }

  getName() {
    return this.name;
  }

  /**
   * 메뉴의 카테고리 이름을 구한다.
   * @returns {string} categoryName;
   */
  getCategory() {
    return this.category;
  }
}

module.exports = Menu;
