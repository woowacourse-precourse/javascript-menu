class Coach {
  constructor() {
    this.coachs;
    this.coachHateFood = new Map();
  }

  setName(coach) {
    this.coachs = coach.split(',');
  }

  setHateFood(coachName, hateFood) {
    this.coachHateFood.set(coachName, hateFood);
    console.log(this.coachHateFood);
  }

  getName() {
    return this.coachs;
  }

  getHateFood() {
    return this.coachHateFood();
  }
}

module.exports = Coach;
