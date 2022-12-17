const Coach = require('./Coach');

class Coachs {
  #list = [];

  addCoach(coachName) {
    this.#list.push(new Coach(coachName));
  }

  addDislikeFoods(coachName, dislikeFoods) {
    if (dislikeFoods === '') return;

    const coach = this.#list.filter((coach) => coach.isMe(coachName))[0];
    coach.addDislikeFoods(dislikeFoods);
  }

  getCoachsName() {
    return this.#list.map((coach) => coach.getName());
  }

  decideMenu(categoryMenus) {
    this.#list.forEach((coach) => coach.decideMenu(categoryMenus));
  }

  getCoachsRecommendedMenu() {
    return this.#list.map((coach) => coach.getRecommendedMenus());
  }
}

module.exports = Coachs;
