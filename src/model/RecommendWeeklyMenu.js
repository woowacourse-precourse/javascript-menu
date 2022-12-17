class RecommendWeeklyMenu {
  #weeklyCategory = [];

  addCategory(categoryName) {
    const countCategory = this.#weeklyCategory.filter(category => category === categoryName).length;
    if (countCategory <= 2) this.#weeklyCategory.push(categoryName);
  }

  countWeeklyCategory() {
    return this.#weeklyCategory.length;
  }

  getWeeklyCategory() {
    return this.#weeklyCategory;
  }
}

module.exports = RecommendWeeklyMenu;
