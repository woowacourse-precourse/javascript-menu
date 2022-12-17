const { ERROR } = require('./constants/constants');
const Coach = require('./domain/Coach');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const findFoodLocation = require('./utils/findFoodLocation');
const getCategory = require('./utils/getCategory');
const getSuggestMenu = require('./utils/getSuggestMenu');
const verify = require('./utils/verify');

class App {
  #foodCategory;
  #coaches;

  play() {
    this.#coaches = [];
    OutputView.gameStart();
    return this.setFoodCategories();
  }

  setFoodCategories() {
    this.#foodCategory = getCategory(verify.moreThanTwoData);
    return this.inputCoaches();
  }

  inputCoaches() {
    InputView.inputCoachNames((input) => {
      try {
        verify.nameCount(input);
        verify.nameLengthCount(input);
        const names = input.split(',').map((name) => name.trim());
        names.forEach((name) => {
          this.#coaches.push(new Coach(name));
        });
        return this.unableEatCheckStart(0);
      } catch (error) {
        if (error.message === ERROR.INVALID_COACH_COUNT) OutputView.ErrorCoachCount();
        if (error.message === ERROR.INVALID_NAME_COUNT) OutputView.ErrorCoachName();
        return this.inputCoaches();
      }
    });
  }

  unableEatCheckStart(coachLength) {
    if (coachLength === this.#coaches.length) return;
    InputView.inputCoachUnableMenu(this.#coaches[coachLength].getCoachName(), (input) => {
      try {
        verify.unableMenuLength(input);
        if (input.trim() !== '') verify.existMenu(input.trim());
        if (input.trim() !== '') this.#coaches[coachLength].setUnableFood(findFoodLocation(input.trim()));
        if (coachLength < this.#coaches.length - 1) return this.unableEatCheckStart(coachLength + 1);
        return this.suggestCoachMenu(0);
      } catch (error) {
        console.error(error);
        if (error.message === ERROR.INVALID_ENABLE_EAT_FOOD) OutputView.ErrorNoMenu();
        if (error.message === ERROR.INVALID_FOOD_LIST_LENGTH) OutputView.ErrorNoMenuLength();
        return this.unableEatCheckStart(coachLength);
      }
    });
  }

  suggestCoachMenu(coachLength) {
    if (coachLength === this.#coaches.length) return;
    this.#foodCategory.forEach((category) => {
      this.#coaches[coachLength].suggestMenu(category, verify.eatenTwice, getSuggestMenu);
    });
    if (coachLength < this.#coaches.length - 1) return this.suggestCoachMenu(coachLength + 1);
    return this.printResult();
  }

  printResult() {
    OutputView.printResultMessage();
    OutputView.printDays();
    OutputView.printCategory(this.#foodCategory);
    return this.printCoaches();
  }

  printCoaches() {
    this.#coaches.forEach((coach) => {
      OutputView.printCoachResult(coach.getResultData());
    });
    return this.gameEnd();
  }

  gameEnd() {
    OutputView.quitGame();
  }
}

const app = new App();
app.play();

module.exports = App;
