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
    this.#menuValidate(menu);
    this.#menuList.push(menu);
  }

  getMenuList() {
    return [...this.#menuList];
  }

  #menuValidate(menu) {
    if (this.#menuList.includes(menu)) {
      throw new Error(`[ERROR] 메뉴가 중복되었습니다.`);
    }
  }
}

module.exports = Coach;
