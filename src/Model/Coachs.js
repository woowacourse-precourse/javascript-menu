class Coachs {
  #coachs = {};
  constructor(coachNames) {
    coachNames.split(",").forEach((coachName) => {
      this.#coachs[coachName] = { notEatMenu: [], ateMenu: [] };
    });
  }

  getCoachs() {
    return this.#coachs;
  }

  getCoachName() {
    return Object.keys(this.#coachs);
  }

  setCoachNotEatMenu(coachName, notEatMenus) {
    notEatMenus.split(",").forEach((notEatMenu) => {
      this.#coachs[coachName].notEatMenu.push(notEatMenu);
    });
  }

  isNotEatMenu(coachName, ateMenu) {
    return new Set(this.#coachs[coachName].notEatMenu).has(ateMenu);
  }

  isAteMenu(coachName, ateMenu) {
    return new Set(this.#coachs[coachName].ateMenu).has(ateMenu);
  }

  setAteMenu(coachName, ateMenu) {
    this.#coachs[coachName].ateMenu.push(ateMenu.trim());
  }
}

module.exports = Coachs;
