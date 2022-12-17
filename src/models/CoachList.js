const Coach = require('./Coach');

class CoachList {
  #coachList = [];

  addCoach(coachName) {
    this.#coachList.push(new Coach(coachName));
  }
}

module.exports = CoachList;
