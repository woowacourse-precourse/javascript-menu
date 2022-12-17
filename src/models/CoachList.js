const Coach = require('./Coach');

class CoachList {
  #coachList = [];

  addCoach(coachName) {
    this.#coachList.push(new Coach(coachName));
  }

  getCoachNameList() {
    return this.#coachList.map((coach) => coach.getCoachName());
  }
}

module.exports = CoachList;
