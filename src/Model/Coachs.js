class Coachs {
  #coachs = {};
  constructor(coachNames) {
    coachNames.split(",").forEach((coachName) => {
      this.#coachs[coachName] = { notEatMenu: [], ateMenu: [] };
    });
  }

  getCoachName() {
    return Object.keys(this.#coachs);
  }

  setCoachNotEatMenu(coachName, notEatMenus) {
    notEatMenus.split(",").forEach((notEatMenu) => {
      this.#coachs[coachName].notEatMenu.push(notEatMenu);
    });
  }
}

module.exports = Coachs;
