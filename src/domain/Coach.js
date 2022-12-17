class Coach {
  name;
  #cannotEat;
  constructor(coachName) {
    this.name = coachName;
    this.#cannotEat = [];
  }

  getName() {
    return this.name;
  }

  setCannotEat(menus) {
    this.cannotEat = menus;
  }
}

module.exports = Coach;
