const { Console } = require("@woowacourse/mission-utils");
const { randomCategory } = require("./GetRandomCategories");
const { getRandomMenues } = require("./RecommandMenus");
const { categoryKey } = require("./utils/constant");
const { splitString, trim } = require("./utils/UtilityFunctions");
const { checkCoach, checkFood } = require("./Validate");
const { InputView } = require("./View/InputView");

class App {
  #coaches; // 코치들이 저장되는 배열. 코치의 이름과(string), 요일별 먹을 메뉴(string), 그리고 먹지 못하는 메뉴(string[])가 저장
  #categories; // 요일별로 카테고리를 저장하는 배열. 0,1,2,3,4 -> 월화수목금 으로 보면 된다.

  play() {
    this.#coaches = new Map();
    this.#categories = [];
    Console.print("점심 메뉴 추천을 시작합니다.");
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
    Console.print("메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");

    const categories = this.#categories.reduce((acc, cur) => {
      return acc + `| ${categoryKey[cur]} `;
    }, "");
    Console.print(`[ 카테고리 ${categories}]`);

    for (const [name, { menus }] of this.#coaches) {
      const recommandMenus = menus.reduce((acc, cur) => {
        return acc + `| ${cur} `;
      }, "");
      Console.print(`[ ${name} ${recommandMenus}]`);
    }

    Console.print("추천을 완료했습니다.");
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
