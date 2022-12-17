class Coach {
  #name;
  #cannotEat;
  #menuList;
  constructor(coachName) {
    this.#name = coachName;
    this.#cannotEat = [];
    this.#menuList = [];
  }

  getName() {
    return this.#name;
  }

  setCannotEat(menus) {
    this.#cannotEat = menus;
  }

  checkCanEat(menu) {
    if (this.#cannotEat.includes(menu)) {
      return false;
    }

    if (this.#menuList.includes(menu)) {
      return false;
    }

    return true;
  }

  setMenu(menu) {
    this.#menuList.push(menu);
    console.log('this.#menuList', this.#menuList);
  }

  getMenuList() {
    return [...this.#menuList];
  }
}

module.exports = Coach;
