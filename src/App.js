const InputView = require('./InputView');
const OutputView = require('./OutputView');

const CoachNameValidator = require('./CoachNameValidator');
const CoachHateMenusValidator = require('./CoachHateMenusValidator');
const RecommendedMenuGenerator = require('./RecommendedMenuGenerator');

const WEEKDAYS = ['월요일', '화요일', '수요일', '목요일', '금요일'];

const MENU_INFO = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

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
        this.#hateMenuInfo[currentCoachName] = hateMenus;
        this.inputHateMenus(coachNameList.slice(1));
        return;
      }

      this.inputHateMenus(coachNameList);
    });
  }

  initCategories() {
    while (this.#recommendedMenuInfo['카테고리'].length < 5) {
      const category = RecommendedMenuGenerator.getRandomCategory();
      if (this.isValidCategory(category)) {
        this.#recommendedMenuInfo['카테고리'].push(category);
      }
    }

    this.initMenus();
  }

  isValidCategory(category) {
    const categories = this.#recommendedMenuInfo.categories;

    if (!categories.includes(category)) return true;

    categories.filter(c => c === category).length < 2;
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

new App().play();

module.exports = App;
