class Coach {
  constructor() {
    this.coachs = new Map();
  }

  setName(coach) {
    const coachNameArray = coach.split(',');
    coachNameArray.forEach(name => this.coachs.set(name));
  }

  setHateFood(coachName, hateFood) {
    this.coachHateFood.set(coachName, hateFood);
  }

  getNames() {
    return [...this.coachs.keys()];
  }
}

module.exports = Coach;
