const { SPLITTER } = require('../settings');

class Coach {
  #coaches = [];

  setNames(input) {
    this.#coaches = input.split(SPLITTER).map((name) => ({
      name,
    }));

    return this.#coaches;
  }

  setInedibleMenu(input, coachName) {
    const inedibleMenu = input.split(SPLITTER);
    this.#coaches.find(({ name }) => name === coachName).inedibleMenu = inedibleMenu;

    return this.#coaches;
  }
}

module.exports = Coach;
