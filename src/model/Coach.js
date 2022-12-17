class Coach {
  #name;
  #NotGoodMenu;
  #weeklyMenu;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setNotGoodMenu(NotGoodMenu) {
    this.#NotGoodMenu = NotGoodMenu;
  }

  setWeeklyMenu(menus) {
    this.#weeklyMenu = menus;
  }

  getWeeklyMenu() {
    return this.#weeklyMenu;
  }

  getNotGoodMenu() {
    return this.#NotGoodMenu;
  }
}

module.exports = Coach;
