const Coach = require('./Coach');

class Coachs {
  #list = [];

  addCoach(coachName) {
    this.#list.push(new Coach(coachName));
  }

  getCoachsName() {
    return this.#list.map((coach) => coach.getName());
  }
}

module.exports = Coachs;
