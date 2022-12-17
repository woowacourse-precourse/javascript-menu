const { readCoachNames, readHateFoods } = require('../views/InputView');
const { printStart, printError, pirntNewLine } = require('../views/OutputView');
const {
  validateCoachNamesInput,
  validateCoachNames,
  validateHateFoodsInput,
  validateHateFoods,
} = require('../utils/InputValidator');
const MenuService = require('../models/MenuService');

class MenuController {
  #menuService;
  #coachNames;

  startService() {
    printStart();
    readCoachNames(this.onReadCoachNames.bind(this));
  }

  onReadCoachNames(coachNamesInput) {
    try {
      validateCoachNamesInput(coachNamesInput);
      validateCoachNames(coachNamesInput.split(','));
      this.#coachNames = coachNamesInput.split(',');
      this.#menuService = new MenuService(coachNamesInput.split(','));
      pirntNewLine();
      readHateFoods(this.#coachNames[0], this.onReadHateFoods.bind(this, [0]));
    } catch (err) {
      printError(err.message);
      readCoachNames(this.onReadCoachNames.bind(this));
    }
  }

  onReadHateFoods(index, hateFoodsInput) {
    index = parseInt(index, 10);
    try {
      validateHateFoodsInput(hateFoodsInput);
      validateHateFoods(hateFoodsInput.split(','));
      this.#menuService.tossHateFoods(index, hateFoodsInput.split(','));
      if (index <= this.#coachNames.length - 2) {
        return readHateFoods(
          this.#coachNames[index + 1],
          this.onReadHateFoods.bind(this, [index + 1]),
        );
      }
      this.startRealService();
    } catch (err) {
      printError(err.message);
      readHateFoods(this.#coachNames[index], this.onReadHateFoods.bind(this, [index]));
    }
  }

  startRealService() {
    this.#menuService.pickCategory();
  }
}

module.exports = MenuController;
