const { Console } = require("@woowacourse/mission-utils");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

class App {
  #coaches; // 코치들이 저장되는 배열. 코치의 이름과(string), 요일별 먹을 메뉴(string), 그리고 먹지 못하는 메뉴(string[])가 저장
  #categories; // 요일별로 카테고리를 저장하는 배열. 0,1,2,3,4 -> 월화수목금 으로 보면 된다.

  play() {
    this.#coaches = [];
    this.#categories = [];
    Console.print("점심 메뉴 추천을 시작합니다.");
    this.getCoachesName();
  }

  getCoachesName() {
    Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", (input) => {
      const coaches = input.split(",");
      console.log(input);
      // 여기서 한번 검사할 것. 검사 완료되면 그 이후 계속해서 감.
      for (const coach of coaches) {
        const coachObj = {
          name: coach,
          menus: [],
          canNotEat: [],
        };
        this.#coaches = [...this.#coaches, coachObj];
      }

      this.askNotEatMenu(0);
    });
  }

  askNotEatMenu(i) {
    if (i === this.#coaches.length) {
      this.getResult();
      return;
    }
    const coach = this.#coaches[i];

    Console.readLine(
      `${coach.name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      (input) => {
        const notEat = input.split(","); // 여기도 한번 검증 해야함.
        this.#coaches = this.#coaches.map((c, idx) =>
          idx === i ? { ...c, canNotEat: notEat } : c,
        );
        this.askNotEatMenu(i + 1);
      },
    );
  }

  getResult() {
    console.log(this.#coaches, "코치들 못먹는 음식");
  }
}

const app = new App();
app.play();

module.exports = App;
