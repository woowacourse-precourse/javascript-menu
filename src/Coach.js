class Coach {
  #dailyMenu = [];

  constructor(name) {
    this.name = name;
    this.avoidMenu = [];
  }

  getDailyMenu() {
    return this.#dailyMenu;
  }

  setAvoidMenu(avoidMenu) {
    if (avoidMenu !== '') { this.avoidMenu = avoidMenu.split(','); }
  }

  isAvoidMenu(menu) {
    if (this.avoidMenu.includes(menu)) return true;
    return false;
  }

  isExistMenu(menu) {
    if (this.#dailyMenu.includes(menu)) return true;
    return false;
  }

  setDailyMenu(menuList, randomMenuMaker) {
    const menu = randomMenuMaker(menuList);
    if (!this.isAvoidMenu(menu) && !this.isExistMenu(menu)) {
      return this.#dailyMenu.push(menu);
    }
    this.setDailyMenu(menuList, randomMenuMaker);
  }
}

module.exports = Coach;
