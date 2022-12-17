const { CATEGORY } = require('../../constants');
const menuDB = require('../storage/menuDB');
const { result } = require('../view/messages');
const Coach = require('./Coach');
const RandomNumberGenerator = require('./RandomNumberGenerator');
const Result = require('./Result');
const Shuffler = require('./Shuffler');

class LunchRecommendation {
  constructor(SAMPLE) {
    this.#createMenuDB(SAMPLE);
    this.categoryList = [];
    this.coachList = [];
  }

  #createMenuDB(SAMPLE) {
    Object.keys(SAMPLE).forEach((menuCategory) => {
      menuDB[menuCategory] = SAMPLE[menuCategory].replace(/, /g, ',').split(',');
    });
  }

  setCoaches(coachNames) {
    coachNames.forEach((coachName) => {
      this.coachList.push(new Coach(coachName));
    });
  }

  getCoaches() {
    return [...this.coachList];
  }

  getRecommendation() {
    let daysLeft = 5;

    while (daysLeft > 0) {
      this.#getRecommendationByCoaches();
      daysLeft -= 1;
    }

    return new Result([...this.coachList], [...this.categoryList]);
  }

  setMenusCannotEat(coach, menus) {
    coach.setCannotEat(menus);
  }

  #getRecommendationByCoaches() {
    const menuListSelected = this.getCategoryMenu(this.#pickCategory());

    this.coachList.forEach((coach) => {
      this.#setRecommendationMenu(coach, menuListSelected);
    });
  }

  #setRecommendationMenu(coach, menuListSelected) {
    const menuNumber = Shuffler.shuffle(menuListSelected)[0];
    if (!coach.checkCanEat(menuListSelected[menuNumber])) {
      return this.#setRecommendationMenu(coach, menuListSelected);
    }

    return coach.setMenu(menuListSelected[menuNumber]);
  }

  #pickCategory() {
    const category = RandomNumberGenerator.generate();
    if (!this.#validateCategory(category)) {
      return this.#pickCategory();
    }
    this.categoryList.push(category);
    return category;
  }

  getCategoryMenu(categoryNumber) {
    return menuDB[CATEGORY[categoryNumber]];
  }

  #validateCategory(category) {
    const repeat = this.categoryList.filter((element) => element === category).length;

    if (repeat === 2) {
      return false;
    }

    return true;
  }
}

module.exports = LunchRecommendation;
