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
      menuDB[menuCategory] = SAMPLE[menuCategory].replace(/ /g, '').split(',');
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
      console.log('daysLeft', daysLeft);
      this.#getRecommendationByCoaches();
      daysLeft -= 1;
    }
    this.coachList.forEach((coach) => {
      console.log('coach.getMenuList()', coach.getMenuList());
    });

    return new Result([...this.coachList], [...this.categoryList]);
  }

  setMenusCannotEat(coach, menus) {
    coach.setCannotEat(menus);
  }

  #getRecommendationByCoaches() {
    const menuListSelected = this.getCategoryMenu(this.#pickCategory());
    console.log('menuListSelected', menuListSelected);

    this.coachList.forEach((coach) => {
      this.#setRecommendationMenu(coach, menuListSelected);
    });
  }

  #setRecommendationMenu(coach, menuListSelected) {
    const menuNumber = Shuffler.shuffle(menuListSelected.length);
    console.log('menu', menuListSelected[menuNumber]);
    if (!coach.checkCanEat(menuListSelected[menuNumber])) {
      return this.#setRecommendationMenu(coach, menuListSelected);
    }

    return coach.setMenu(menuListSelected[menuNumber]);
  }

  #pickCategory() {
    const category = RandomNumberGenerator.generate();
    console.log('categoryNumber', category);
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

// const lunch = new LunchRecommendation({
//   일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
//   한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
//   중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
//   아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
//   양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
// });
// menuDB['양식']; //?
// CATEGORY; //?
// lunch.getCategoryMenu(5); //?

module.exports = LunchRecommendation;
