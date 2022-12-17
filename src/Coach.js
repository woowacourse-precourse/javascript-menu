class Coach {
  #name;
  #menus;
  #banMenuSet;
  constructor(CoachName) {
    this.#name = CoachName;
    this.#menus = [];
  }

  addMenus(menus) {
    let menu = MissionUtils.Randoms.shuffle(menus)[0];
    while (banMenuSet.has(menu) || this.#menus.includes(menu)) {
      menu = MissionUtils.Randoms.shuffle(menus)[0];
    }
    this.#menus.push(menu);
    return this.#menus;
  }

  addBanMenus(banMenuArray) {
    this.#banMenuSet = new Set(banMenuArray);
    return this.#banMenuSet;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
