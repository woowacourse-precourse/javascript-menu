const Coach = require('./Coach');

class CoachList {
  #coachList = [];

  addCoach(coachName) {
    this.#coachList.push(new Coach(coachName));
  }

  getCoachNameList() {
    return this.#coachList.map((coach) => coach.getCoachName());
  }

  addHateMenuList(coachName, hateMenuList) {
    if (!hateMenuList) return;
    const coach = this.#coachList.filter((el) =>
      el.getCorrectCoachName(coachName)
    )[0];
    coach.addHateMenuList(hateMenuList);
  }

  recommendMenu(menuList) {
    this.#coachList.forEach((coach) => coach.recommendMenu(menuList));
  }

  getRecommendedMenu() {
    return this.#coachList.map((coach) => coach.getRecommendedMenuList())
  }
}

module.exports = CoachList;
