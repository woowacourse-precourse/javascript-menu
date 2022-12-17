const Coach = require('../model/Coach');

class CoachRepository {
  #coachList = new Map();
  #coachCount = 0;
  #coachNames = [];

  initCount() {
    this.#coachCount = 0;
  }

  addCoach(name) {
    this.#coachNames.push(name);
    this.#coachList.set(name, new Coach(name));
  }

  getEachCoach() {
    return this.#coachList.get(this.#coachNames[this.#coachCount]);
  }

  getCoachByName(name) {
    return this.#coachList.get(name);
  }

  checkNextCoach() {
    this.#coachCount += 1;
    return !!this.#coachNames[this.#coachCount];
  }

  getCoachList() {
    return this.#coachList;
  }
}

module.exports = CoachRepository;
