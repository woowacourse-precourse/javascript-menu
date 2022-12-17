const { SPLITTER } = require('../settings');

class Coach {
  #coaches = [];

  setNames(input) {
    this.#coaches = input.split(SPLITTER).map((name) => ({
      name,
      recommendedMenu: [],
    }));

    return this.#coaches;
  }

  setInedibleMenu(input, coachName) {
    const inedibleMenu = input.split(SPLITTER);
    this.#coaches.find(({ name }) => name === coachName).inedibleMenu = inedibleMenu;

    return this.#coaches;
  }

  decideMenu(recommendMenu, category, shuffle) {
    this.#coaches.forEach((coach) => {
      const recommendedMenu = recommendMenu(category, shuffle);
      coach.recommendedMenu.push(recommendedMenu);
    });
  }
}

module.exports = Coach;
