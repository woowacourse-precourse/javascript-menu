const Coach = require('../model/Coach');

class CoachRepository {
  #coachs = new Map();

  addCoach(name) {
    this.#coachs.set(name, new Coach());
  }
}

module.exports = CoachRepository;
