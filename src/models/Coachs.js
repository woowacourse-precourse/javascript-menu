const Coach = require('./Coach');

class Coachs {
  #list = [];

  addCoach(coachName) {
    this.#list.push(new Coach(coachName));
  }

  addDislikeFoods(coachName, dislikeFoods) {
    if (dislikeFoods === '') return console.log('다 잘 먹어요!');

    const coach = this.#list.filter((coach) => coach.isMe(coachName))[0];
    coach.addDislikeFoods(dislikeFoods);
  }

  getCoachsName() {
    return this.#list.map((coach) => coach.getName());
  }
}

module.exports = Coachs;
