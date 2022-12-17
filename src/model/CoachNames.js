class CoachNames {
  coachNames;

  index;

  constructor(coachNames) {
    this.coachNames = coachNames;
    this.index = 0;
  }

  getCoachName() {
    if (this.index >= this.coachNames.length) return "끝";

    const coachName = this.coachNames[this.index];
    this.index += 1;
    return coachName;
  }
}

module.exports = CoachNames;
