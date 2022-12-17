const CategoryMaker = require('./CategoryMaker');
const MenuMaker = require('./MenuMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateCoachName, validateDislikeMenu } = require('./utils/validate');
const { convertCategory, combineCoachMenu } = require('./utils/menuUtil');

class App {
  #index;
  constructor() {
    this.coach = null;
    this.category = null;
    this.recommendMenu = [];
    this.#index = 0;
  }

  play() {
    OutputView.printStart();
    InputView.readCoachName(this.getCoachNameInput.bind(this));
  }

  getCoachNameInput(name) {
    this.coach = name.split(',');
    validateCoachName(this.coach);
    this.category = CategoryMaker.createCategory();
    InputView.readDislikeMenu(this.coach[this.#index], this.getDislikeMenuInput.bind(this));
  }

  getDislikeMenuInput(menu) {
    const dislikeMenu = menu.split(',');
    validateDislikeMenu(dislikeMenu);
    this.getMenuRecommendation(dislikeMenu);
  }

  isEnd() {
    return this.#index === this.coach.length;
  }

  getMenuRecommendation(dislikeMenu) {
    const menuMaker = new MenuMaker(this.category, dislikeMenu);
    const weekMenu = menuMaker.createMenu();
    this.recommendMenu.push(weekMenu);
    this.#index++;
    if (this.isEnd()) {
      this.getResult();
      return;
    }
    InputView.readDislikeMenu(this.coach[this.#index], this.getDislikeMenuInput.bind(this));
  }

  getResult() {
    const convertedCategory = convertCategory(this.category);
    const combinedCoachMenu = combineCoachMenu(this.coach, this.recommendMenu);
    OutputView.printResult(convertedCategory, combinedCoachMenu);
  }
}

const app = new App();
app.play();

module.exports = App;
