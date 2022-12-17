const TableMaker = require('./TableMaker');

class RecommendMachine {
  #coachesMap = new Map();

  getCoachesMap() {
    return this.#coachesMap;
  }

  setCoachesMap(inputs) {
    const coaches = inputs.split(',');

    coaches.forEach((coach) => this.#coachesMap.set(coach, {}));
  }

  getCoaches() {
    return [...this.#coachesMap.keys()];
  }

  setHateFood(coach, hateList) {
    this.#coachesMap.set(coach, {
      hateList: hateList.split(','),
    });
  }

  getResult() {
    return TableMaker.makeResultTable(this.#coachesMap);
  }
}

module.exports = { RecommendMachine };
