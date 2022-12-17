const { GAME_STRING } = require('../Constant');
const SplitAndTrim = require('../utils/SplitAndTrim');

class CoachData {
  #coaches;

  #hateMenus = {};

  constructor(coaches) {
    console.log(coaches);
    const coachArray = SplitAndTrim(coaches);
    this.#coaches = coachArray;
    this.#coaches.forEach((coachName) => {
      this.#hateMenus[coachName] = '';
    });
  }

  checkCoach() {
    console.log(this.#coaches);
  }

  getCoachName(count) {
    return this.#coaches[count];
  }

  getCoachLength() {
    return this.#coaches.length;
  }

  setHateMenus(name, menus) {}
}

module.exports = CoachData;
