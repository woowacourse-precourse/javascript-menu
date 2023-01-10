class Coach {
  constructor() {
    this.coachs = new Map();
    this.handlingCount = 0;
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
    return this.coachs.get(coach);
  }

  getCurrentCoach() {
    const currentCoach = this.getNames()[this.handlingCount];
    this.handlingCount += 1;
    return currentCoach;
  }

  possibleGetCurrentCoach() {
    return this.handlingCount <= this.getNames().length;
  }

  resetHandlingCount() {
    this.handlingCount = 0;
  }

  decreaseHandlingCount() {
    this.handlingCount -= 1;
  }
}

module.exports = Coach;
