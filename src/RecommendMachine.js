class RecommendMachine {
  #coachesMap = new Map();

  setCoachesMap(inputs) {
    const coaches = inputs.split(',');

    coaches.forEach((coach) => this.#coachesMap.set(coach, {}));
  }

  getCoaches() {
    return [...this.#coachesMap.keys()];
  }
}

module.exports = { RecommendMachine };
