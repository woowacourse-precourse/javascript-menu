const { Console, Random } = require("@woowacourse/mission-utils");
const { randomCategory } = require("./GetRandomCategories");
const { splitString } = require("./utils/UtilityFunctions");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

const categoryKey = {
  1: "일식",
  2: "한식",
  3: "중식",
  4: "아시안",
  5: "양식",
};

class App {
  #coaches; // 코치들이 저장되는 배열. 코치의 이름과(string), 요일별 먹을 메뉴(string), 그리고 먹지 못하는 메뉴(string[])가 저장
  #categories; // 요일별로 카테고리를 저장하는 배열. 0,1,2,3,4 -> 월화수목금 으로 보면 된다.

  play() {
    this.#coaches = new Map();
    this.#categories = [];
    Console.print("점심 메뉴 추천을 시작합니다.");
    this.#categories = randomCategory(this.#categories);

    this.getCoachesName();
  }

  getCoachesName() {
    Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", (input) => {
      const coaches = splitString(input, ",");
      console.log(input);
      // 여기서 한번 검사할 것. 검사 완료되면 그 이후 계속해서 감. 2-4글자, 중복 안됨.
      for (const coach of coaches) {
        this.#coaches.set(coach, {
          menus: [],
          canNotEat: [],
        });
      }

      this.askNotEatMenu(0);
    });
  }

  askNotEatMenu(i) {
    if (i === this.#coaches.size) {
      this.getResult();
      return;
    }
    const [name, attrs] = [...this.#coaches][i];
    Console.readLine(
      `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      (input) => {
        const notEat = input.split(","); // 여기도 한번 검증 해야함. 여기서 SAMPLEDATA에 있지 않는 음식이라면 다시 입력하라고 해줘야 함.
        this.#coaches.set(name, { ...attrs, canNotEat: notEat });
        this.askNotEatMenu(i + 1);
      },
    );
  }

  getResult() {
    // const menu = Random.shuffle(menus)[0];
    for (let i = 0; i < 5; i++) {
      // 각 요일별 메뉴 선정
      const category = this.#categories[i];
      const menus = SAMPLE[categoryKey[category]]
        .split(", ")
        .map((menu) => menu.trim());

      for (const [name, attrs] of this.#coaches) {
        const canMenu = menus.filter((menu) => !attrs.canNotEat.includes(menu));
        const numMenus = Array.from(
          { length: canMenu.length },
          (_, idx) => idx,
        );
        console.log(canMenu, numMenus);
        while (true) {
          const menuIdx = Random.shuffle(numMenus)[0]; // 이제 같은 음식이 안나오게끔 해야 함.
          console.log(canMenu[menuIdx], attrs, "가능한 음식");
          if (attrs.menus.includes(canMenu[menuIdx])) continue;
          this.#coaches.set(name, {
            ...attrs,
            menus: [...attrs.menus, canMenu[menuIdx]],
          });
          break; // 겹치는 음식이 없게끔 설정
        }
      }
    }

    Console.print("메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");

    const categories = this.#categories.reduce((acc, cur) => {
      return acc + `| ${categoryKey[cur]} `;
    }, "");
    Console.print(`[ 카테고리 ${categories} ]`);

    for (const [name, { menus }] of this.#coaches) {
      const recommandMenus = menus.reduce((acc, cur) => {
        return acc + `| ${cur} `;
      }, "");
      Console.print(`[ ${name} ${recommandMenus} ]`);
    }

    Console.print("추천을 완료했습니다.");
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
