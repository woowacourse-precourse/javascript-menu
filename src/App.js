const Recommender = require('./Recommender');

const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

const CoachNameValidator = require('./validators/CoachNameValidator');
const CoachHateMenusValidator = require('./validators/CoachHateMenusValidator');

const { WEEKDAYS } = require('./constants');

class App {
  #hateMenuInfo = {};
  #recommendedMenuInfo = {
    구분: WEEKDAYS,
    카테고리: [],
  };

  play() {
    OutputView.printServiceStartMessage();
    this.inputCoachNames();
  }

  inputCoachNames() {
    InputView.readCoachNames(coachNames => {
      if (this.isValidInputValue(CoachNameValidator, coachNames)) {
        this.inputHateMenus(coachNames.split(','));
        return;
      }

      this.inputCoachNames();
    });
  }

  inputHateMenus(coachNameList) {
    if (!coachNameList.length) {
      this.initCategories();
      return;
    }

    const currentCoachName = coachNameList[0];

    InputView.readHateMenus(currentCoachName, hateMenus => {
      if (this.isValidInputValue(CoachHateMenusValidator, hateMenus)) {
        this.#hateMenuInfo[currentCoachName] = hateMenus.split(',');
        this.inputHateMenus(coachNameList.slice(1));
        return;
      }

      this.inputHateMenus(coachNameList);
    });
  }

  initCategories() {
    while (this.#recommendedMenuInfo['카테고리'].length < 5) {
      const category = Recommender.getRecommendedCategory();

      if (this.isValidCategory(category)) {
        this.#recommendedMenuInfo['카테고리'].push(category);
      }
    }

    this.initMenus();
  }

  isValidCategory(category) {
    const categories = this.#recommendedMenuInfo['카테고리'];

    if (!categories.includes(category)) return true;

    return categories.filter(c => c === category).length < 2;
  }

  initMenus() {
    const categories = this.#recommendedMenuInfo['카테고리'];
    const coachList = Object.keys(this.#hateMenuInfo);

    coachList.forEach(coach => {
      this.#recommendedMenuInfo[coach] = [];

      categories.forEach(category => {
        const menuList = this.#recommendedMenuInfo[coach];
        const hateMenus = this.#hateMenuInfo[coach];
        let menu = Recommender.getRecommendedMenu(category);

        while (!this.isValidMenu({ menuList, menu, hateMenus })) {
          menu = Recommender.getRecommendedMenu(category);
        }

        this.#recommendedMenuInfo[coach].push(menu);
      });
    });

    this.showRecommendResult();
  }

  isValidMenu({ menuList, menu, hateMenus }) {
    return !menuList.includes(menu) && !hateMenus.includes(menu);
  }

  showRecommendResult() {
    OutputView.printRecommendResult(this.#recommendedMenuInfo);
  }

  isValidInputValue(validator, inputValue) {
    try {
      validator.validate(inputValue);
      return true;
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      return false;
    }
  }
}

module.exports = App;
