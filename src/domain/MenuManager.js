const MENU_LIST = require("../MENU_LIST");
const shuffleArray = require("../util/shuffleArray");

class MenuManager {
  #coachs;

  constructor(coachs) {
    this.#coachs = coachs;
  }

  getFirstCoach() {
    return this.#coachs[0];
  }

  getNextCoach(name) {
    for (let i = 0; i < this.#coachs.length; i++) {
      if (i === this.#coachs.length - 1) return false;
      if (this.#coachs[i].getName() === name) return this.#coachs[i + 1];
    }
  }

  addMenuToCoach(coach, category) {
    let isAddSuccess = false;
    while (!isAddSuccess) {
      const menu = shuffleArray(MENU_LIST[category])[0];
      isAddSuccess = coach.addMenu(menu);
    }
  }

  setMenus(categorys) {
    this.#coachs.forEach((coach) => {
      categorys.forEach((category) => this.addMenuToCoach(coach, category));
    });
  }

  getMenusByCoaches() {
    return this.#coachs.map((coach) => ({ name: coach.getName(), menus: coach.getMenus() }));
  }
}

module.exports = MenuManager;
