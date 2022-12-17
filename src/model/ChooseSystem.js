const { Random } = require('@woowacourse/mission-utils');
const CategoryChooser = require('./CategoryChooser');
const MenuChooser = require('./MenuChooser');

class ChooseSystem {
  #menuChooser = new MenuChooser();
  #categories;
  #coachNames = [];
  #bans = {};
  #results = {};

  shuffleCategory() {
    this.#categories = CategoryChooser.choose();
  }

  addCoach(coachName) {
    this.#coachNames.push(coachName);
  }

  banMenu(coachName, menus) {
    const trimmedMenus = menus.split(',');
    this.#bans[coachName] = trimmedMenus;
  }

  chooseAllMenus() {
    this.#coachNames.forEach((coachName) => {
      console.log('LETS TEST', { cat: this.#categories, ba: this.#bans[coachName] });
      const chosenMenus = this.#menuChooser.choose(this.#categories, this.#bans[coachName]);
      this.#results[coachName] = chosenMenus;
    });
  }
}

module.exports = MenuChooser;
