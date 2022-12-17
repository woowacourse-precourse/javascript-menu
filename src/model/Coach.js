const { SPLITTER } = require('../settings');

class Coach {
  #coaches = [];

  setNames(input) {
    if (!input) return this.#coaches;
    this.#coaches = input.split(SPLITTER).map((name) => ({
      name,
      inedibleMenu: [],
      recommendedMenu: [],
    }));

    return this.#coaches;
  }

  setInedibleMenu(input, coachName) {
    if (!input) return this.#coaches;

    const inedibleMenu = input.split(SPLITTER);
    this.#coaches.find(({ name }) => name === coachName).inedibleMenu = inedibleMenu;

    return this.#coaches;
  }

  decideMenu(recommendMenu, category, shuffle) {
    this.#coaches.forEach((coach) => {
      let recommendedMenu = recommendMenu(category, shuffle);
      let isToExcluded = Coach.judgeIsMenuToExcluded(coach, recommendedMenu);

      while (isToExcluded) {
        recommendedMenu = recommendMenu(category, shuffle);
        isToExcluded = Coach.judgeIsMenuToExcluded(coach, recommendedMenu);
      }

      coach.recommendedMenu.push(recommendedMenu);
    });

    return this.#coaches;
  }

  static judgeIsMenuToExcluded(coach, recommendedMenu) {
    const isInedibleMenu = coach.inedibleMenu.includes(recommendedMenu);
    const isAlreadyRecommended = coach.recommendedMenu.includes(recommendedMenu);

    const isToExcluded = isInedibleMenu || isAlreadyRecommended;
    return isToExcluded;
  }
}

module.exports = Coach;
