class MenuGame {
  #menu;
  #coaches; // key: 이름, value: 못먹는 음식 Array

  constructor(menu) {
    this.#menu = menu;
    this.#coaches = {};
  }

  setCoaches(coaches) {
    coaches.split(',').forEach(name => {
      this.#coaches[name] = [];
    });
  }

  getCoaches() {
    return this.#coaches;
  }

  addCoachesHateMenus(name, menus) {
    menus.forEach(menu => {
      if (menu !== '') {
        this.#coaches[name].push(menu);
      }
    });
  }
}

module.exports = MenuGame;
