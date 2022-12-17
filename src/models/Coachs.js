const Coach = require('./Coach');

class Coachs {
  #list = [];

  addCoach(coachName) {
    this.#list.push(new Coach(coachName));
  }
}

module.exports = Coachs;
