const MENU_LIST = require("../MENU_LIST");
const shuffleArray = require("../util/shuffleArray");

class MenuManager {
  #coaches;

  constructor(coaches) {
    this.#coaches = coaches;
  }

  getFirstCoach() {
    return this.#coaches[0];
  }

  getNextCoach(name) {
    for (let i = 0; i < this.#coaches.length; i++) {
      if (i === this.#coaches.length - 1) return false;
      if (this.#coaches[i].getName() === name) return this.#coaches[i + 1];
    }
  }

  #addMenuToCoach(coach, category) {
    let isAddSuccess = false;
    while (!isAddSuccess) {
      const menu = shuffleArray(MENU_LIST[category])[0];
      isAddSuccess = coach.addMenu(menu);
    }
  }

  setMenus(categorys) {
    this.#coaches.forEach((coach) => {
      categorys.forEach((category) => this.#addMenuToCoach(coach, category));
    });
  }

  getMenusByCoaches() {
    return this.#coaches.map((coach) => ({ name: coach.getName(), menus: coach.getMenus() }));
  }
}

module.exports = MenuManager;
