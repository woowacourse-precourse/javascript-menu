const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;

const { MENU_LIST } = require("../constant/MenuList");

class Menu {
  #categories = [];
  #uneatableMenus = [];

  validate(menus) {
    const uneatableMenus = menus.split(",");

    this.isValidQuantity(uneatableMenus);

    this.#uneatableMenus.concat(uneatableMenus);
  }
  isValidQuantity(uneatableMenus) {
    if (!(uneatableMenus.length >= 0 && uneatableMenus.length <= 2)) {
      throw new Error("[ERROR] 못 먹는 메뉴는 최소 0개, 최대 2개이어야 합니다");
    }
  }

  //   일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  //   한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  //   중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  //   아시안:
  //     "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  //   양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",

  makeRecommandResult() {
    this.recommandCategories();
  }

  recommandCategories() {
    const pickedCategory = MENU_LIST.category[Random.pickNumberInRange(0, 4)];

    if (this.checkAvailable(pickedCategory) === false) {
      return this.recommandCategories();
    }
    this.#categories.push(pickedCategory);

    if (this.#categories.length !== 5) {
      this.recommandCategories();
    }
  }

  checkAvailable(pickedCategory) {
    let count = 0;
    this.#categories.forEach((item) => {
      if (item === pickedCategory) {
        count += 1;
      }
    });
    if (count >= 2) {
      return false;
    }
    return true;
  }
}

const menu = new Menu();
menu.makeRecommandResult();

module.exports = Menu;
