const Coach = require('../Model/Coach');

class CoachService {
  #coaches;

  createCoaches(coachNames) {
    this.#coaches = coachNames.map((name) => new Coach(name));
  }

  getCoaches() {
    return this.#coaches;
  }
}

module.exports = CoachService;
