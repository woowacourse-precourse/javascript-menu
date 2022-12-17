const Coach = require('./Coach');
const randomGenerator = require('../util/randomGenerator');
const { CATEGORY, MENU } = require('../util/constants/string');

class MenuRecommender {
  #coaches = [];

  constructor(names) {
    this.#coaches = names.map((name) => new Coach(name));
  }

  getRandomCategory() {
    const randomIndex = randomGenerator.generateRandomCategoryNumber();
    const categoryArray = Object.values(CATEGORY);
    return [randomIndex, categoryArray[index]];
  }

  getRandomMenu(categoryIndex) {
    const menuArray = Object.values(MENU);
    const randomIndex = randomGenerator.generateRandomMenuNumber();
    return menuArray[categoryIndex][randomIndex];
  }
}

module.exports = MenuRecommender;
