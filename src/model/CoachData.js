const SplitAndTrim = require('../utils/SplitAndTrim');

class CoachData {
  #coaches;

  #hateMenus = {};

  constructor(coaches) {
    const coachArray = SplitAndTrim(coaches);
    this.#coaches = coachArray;
    this.#coaches.forEach((coachName) => {
      this.#hateMenus[coachName] = [];
    });
  }

  getCoachName(count) {
    return this.#coaches[count];
  }

  getCoachLength() {
    return this.#coaches.length;
  }

  setHateMenus(name, menus) {
    const menuArray = SplitAndTrim(menus);
    this.#hateMenus[name] = menuArray;
  }

  getHateMenus() {
    return this.#hateMenus;
  }
}

module.exports = CoachData;
