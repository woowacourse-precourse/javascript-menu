class Coachs {
  #coachNames = {};
  constructor(coachNames) {
    coachNames.split(",").forEach((coachName) => {
      this.#coachNames[coachName] = { notEatMenu: [], ateMenu: [] };
    });
  }
}

module.exports = Coachs;
