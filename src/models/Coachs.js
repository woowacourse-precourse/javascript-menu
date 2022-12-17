const Coach = require('./Coach');

class Coachs {
  #list = [];

  addCoach(coachName) {
    this.#list.push(new Coach(coachName));
  }

  addDislikeFoods(coach, dislikeFoods) {
    if (dislikeFoods === '') return console.log('다 잘 먹어요!');

    console.log(`${coach}는 ${dislikeFoods}를 못 먹어요!`);
  }

  getCoachsName() {
    return this.#list.map((coach) => coach.getName());
  }
}

module.exports = Coachs;
