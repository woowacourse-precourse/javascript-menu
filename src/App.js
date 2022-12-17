const { randomCategory } = require("./GetRandomCategories");
const { getRandomMenues } = require("./RecommendMenus");
const { splitString, trim } = require("./utils/UtilityFunctions");
const { checkCoach, checkFood } = require("./Validate");
const { InputView } = require("./View/InputView");
const { OutputView } = require("./View/OutputView");

class App {
  #coaches; // 코치들이 저장되는 배열. 코치의 이름과(string), 요일별 먹을 메뉴(string), 그리고 먹지 못하는 메뉴(string[])가 저장
  #categories; // 요일별로 카테고리를 저장하는 배열. 0,1,2,3,4 -> 월화수목금 으로 보면 된다.

  play() {
    this.#coaches = new Map();
    this.#categories = [];
    OutputView.startRecommend();
    this.#categories = randomCategory(this.#categories);

    InputView.inputCoachNames((names) => this.getCoachesNameCallBack(names));
  }

  getCoachesNameCallBack(names) {
    const coaches = splitString(names, ",").map(trim); // 이름 깔끔하게 정리
    const result = checkCoach(coaches, () =>
      InputView.inputCoachNames((names) => this.getCoachesNameCallBack(names)),
    );
    if (!result) return;
    this.setCoachesToMap(coaches);
    this.askNotEatMenu(this.#coaches, 0);
  }

  setCoachesToMap(coaches) {
    for (const coach of coaches) {
      this.#coaches.set(coach, {
        menus: [],
        canNotEat: [],
      });
    }
  }

  askNotEatMenu(coaches, index) {
    if (index === coaches.size) {
      this.getResult();
      return;
    }

    const [name] = [...coaches][index];
    InputView.askMenues(name, (menus) =>
      this.notEatMenusCallback(menus, coaches, index),
    );
  }

  notEatMenusCallback(menus, coaches, index) {
    const coach = [...coaches][index];
    const [name, attrs] = coach;
    const foods = splitString(menus, ",").map((name) => name.trim()); // 여기도 한번 검증 해야함. 여기서 SAMPLEDATA에 있지 않는 음식이라면 다시 입력하라고 해줘야 함.
    checkFood(foods, () => this.askNotEatMenu(coaches, index));

    this.#coaches.set(name, { ...attrs, canNotEat: foods });
    this.askNotEatMenu(coaches, index + 1);
  }

  appendRandomMenus() {
    for (const [name, attrs] of this.#coaches) {
      const coachMenus = getRandomMenues(this.#categories, attrs.canNotEat);
      this.#coaches.set(name, { ...attrs, menus: [...coachMenus] });
    }
  }

  getResult() {
    this.appendRandomMenus();

    OutputView.printRecommendMenuResult();
    OutputView.printDayRow();
    OutputView.printCategoryRow(this.#categories);
    for (const [name, { menus }] of this.#coaches) {
      OutputView.printCoachRecommendMenus(name, menus);
    }
    OutputView.printRecommendEnd();
  }
}

module.exports = App;
