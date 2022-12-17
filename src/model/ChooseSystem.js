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

  addCoaches(names) {
    this.#coachNames = names;
  }

  banMenu(coachName, menus) {
    const trimmedMenus = menus.split(',');
    this.#bans[coachName] = trimmedMenus;
  }

  chooseAllMenus() {
    this.#coachNames.forEach((coachName) => {
      const chosenMenus = this.#menuChooser.choose(this.#categories, this.#bans[coachName]);
      this.#results[coachName] = chosenMenus;
    });
  }

  getResults() {
    const result = { categories: this.#categories, pickResult: [] };
    this.#coachNames.forEach((coachName) => {
      result.pickResult.push([coachName].concat(this.#results[coachName]));
    });

    return result;
  }
}

module.exports = ChooseSystem;
