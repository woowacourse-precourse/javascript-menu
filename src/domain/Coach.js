class Coach {
  constructor() {
    this.coachs = new Map();
  }

  setName(coach) {
    const coachNameArray = coach.split(',');
    coachNameArray.forEach(name => this.coachs.set(name));
  }

  setHateFood(coachName, hateFood) {
    this.coachs.set(coachName, hateFood);
  }

  getNames() {
    return [...this.coachs.keys()];
  }

  getHateFood(coach) {
    return this.coachs.get(coach).split(',');
  }
}

module.exports = Coach;
