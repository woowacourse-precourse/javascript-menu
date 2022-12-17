const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const { Console } = require('@woowacourse/mission-utils');
const CotchNameValidator = require('./validator/CotchNameValidator');
const NotEatValidator = require('./validator/NotEatValidator');
const MenuRandomNumberGenerator = require('./MenuRandomNumberGenerator');
// const MenuMaker = require('./MenuMaker');
class Menu {
  #cotchs;
  #cotchIndex;
  #cotchsCategory;
  #cotchsFoods;

  constructor() {
    this.#cotchs = [];
    this.#cotchIndex = 0;
    this.#cotchsCategory = [];
    this.#cotchsFoods = {};
  }

  start() {
    OutputView.printStartRecommend();
    this.inputCotchName();
  }
  inputCotchName() {
    InputView.readCotchName(this.validateCotchName.bind(this));
  }
  validateCotchName(names) {
    try {
      const cotchs = names.split(',').map((cotch) => cotch.trim());
      new CotchNameValidator(cotchs);
      this.#cotchs = cotchs;
      this.inputNotEat();
    } catch (error) {
      Console.print(error);
      this.inputCotchName();
    }
  }

  inputNotEat() {
    InputView.readNotEat(this.#cotchs[this.#cotchIndex], this.validateNotEat.bind(this));
    this.#cotchIndex++;
  }

  validateNotEat(foods) {
    try {
      if (this.#cotchIndex == this.#cotchs.length) return this.makeCotchsSet();
      new NotEatValidator(foods);
      Console.print('');
      this.inputNotEat();
    } catch (error) {
      Console.print(error);
      this.inputNotEat();
    }
  }

  makeCotchsSet(cotchs) {
    cotchs.forEach((cotch) => {
      if (!this.#cotchsFoods[cotch]) this.#cotchsFoods[cotch] = [];
    });
    this.recommand();
  }

  recommand() {
    const menuRandomNumber = () => MenuRandomNumberGenerator.generate();
    this.makeRecommand(menuRandomNumber);
  }

  makeRecommand(generateRandomNumber) {
    for (let cotch = 0; cotch < this.#cotchs.length; cotch++) {
      this.#cotchsFoods[cotch] = this.randomDayMenu(generateRandomNumber);
    }
  }

  randomDayMenu(generateRandomNumber) {
    while (this.#cotchsCategory.length < 5) {
      const dayMenu = generateRandomNumber();
      let category = '';
      if (dayMenu == 1) category = '일식';
      if (dayMenu == 2) category = '한식';
      if (dayMenu == 3) category = '중식';
      if (dayMenu == 4) category = '아시안';
      if (dayMenu == 5) category = '양식';
      this.checkCategory(category);
    }
    return this.result();
  }

  checkCategory(category) {
    if (!this.#cotchsCategory.includes(category)) this.#cotchsCategory.push(category);
  }

  result() {
    console.log(this.#cotchsCategory);
    // OutputView.printResult();
    // OutputView.printDay();
  }

  play() {
    this.start();
    this.recommand();
  }
}

module.exports = Menu;
