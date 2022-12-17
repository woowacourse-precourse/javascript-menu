const CategoryRandomNumberGenerator = require('../utils/CategoryRandomNumberGenerator');
const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY_NUMBER } = require('../constants/constants');

const categories = {
  일식: [
    '규동',
    '우동',
    '미소시루',
    '스시',
    '가츠동',
    '오니기리',
    '하이라이스',
    '라멘',
    '오코노미야끼',
  ],
  한식: [
    '김밥',
    '김치찌개',
    '쌈밥',
    '된장찌개',
    '비빔밥',
    '칼국수',
    '불고기',
    '떡볶이',
    '제육볶음',
  ],
  중식: [
    '깐풍기',
    '볶음면',
    '동파육',
    '짜장면',
    '짬뽕',
    '마파두부',
    '탕수육',
    '토마토 달걀볶음',
    '고추잡채',
  ],
  아시안: [
    '팟타이',
    '카오 팟',
    '나시고렝',
    '파인애플 볶음밥',
    '쌀국수',
    '똠얌꿍',
    '반미',
    '월남쌈',
    '분짜',
  ],
  양식: [
    '라자냐',
    '그라탱',
    '뇨끼',
    '끼슈',
    '프렌치 토스트',
    '바게트',
    '스파게티',
    '피자',
    '파니니',
  ],
};
class MenuSelector {
  #coachs;
  #weekCategories = [];

  constructor(coachs) {
    this.#coachs = coachs;
  }

  getCoachs() {
    return this.#coachs;
  }

  registerDislikeMenu() {
    this.#coachs.setDislikeMenu();
  }

  selectCategory() {
    const category = CATEGORY_NUMBER[CategoryRandomNumberGenerator.generate()];

    return category;
  }

  selectMenu(category) {
    const menu =
      categories[category][
        Random.shuffle(
          categories[category].map((_, i) => {
            return i;
          })
        )[0] - 1
      ];

    return menu;
  }

  //한 코치의 하루 메뉴정하기
  decideDayMenu(dayCategory, coach) {
    let menu;
    do {
      menu = this.selectMenu(dayCategory);
    } while (coach.hasSameMenu(menu) || coach.isDislikeMenu(menu));

    coach.setMenu(menu);
  }

  decideDayCategory() {
    let dayCategory;
    do {
      dayCategory = this.selectCategory();
    } while (this.countSameCategory(dayCategory) > 2);
    this.#weekCategories.push(dayCategory);
    return dayCategory;
  }

  //한 코치의 일주일 메뉴정하기
  decideWeekMenu(coach) {
    this.#weekCategories.forEach((dayCategory) => {
      this.decideDayMenu(dayCategory, coach);
    });
  }

  //모든 코치의 일주일 메뉴정하기
  decideAllCoachWeekMenu() {
    for (let i = 0; i < 5; i += 1) this.decideDayCategory();
    this.#coachs.forEach((coach) => {
      this.decideWeekMenu(coach);
    });
  }
}

module.exports = MenuSelector;
