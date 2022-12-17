const CategoryRandomNumberGenerator = require("./CategoryRandomNumberGenerator");
const Coachs = require("./Model/Coachs");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const { Random } = require("@woowacourse/mission-utils");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

const categorysArray = Object.keys(SAMPLE);

class App {
  categorysCount = {};
  play() {
    OutputView.printServiceStart();

    this.inputCoachNames();
  }

  inputCoachNames() {
    InputView.readCoachNames(this.actionCoachNames.bind(this));
  }

  actionCoachNames(coachNames) {
    this.coachs = new Coachs(coachNames);

    // 각 코치가 못 먹는 메뉴를 입력받는다.
    this.coachs.setCoachNotEatMenu("구구", "김밥");
    this.coachs.setCoachNotEatMenu("제임스", "떡볶이");

    this.decideCategory();
  }

  decideCategory() {
    const categoryName = this.getCategoryName();

    if (this.categorysCount[categoryName] || 0 <= 2) {
      this.categorysCount[category] = this.categorysCount[category] + 1 || 1;
      this.recommendMenu(categoryName);
      return;
    }
    this.decideCategory();
  }

  getCategoryName() {
    return categorysArray[CategoryRandomNumberGenerator.generate() - 1];
  }

  recommendMenu(categoryName) {
    this.coachs.getCoachName().forEach((coachName) => {
      const ateMenu = this.getEatMenu(categoryName);
    });
  }

  getEatMenu(categoryName) {
    const randomNumber = Random.shuffle(
      Array.from({ length: 9 }, (_, i) => i)
    )[0];
    return SAMPLE[categoryName].split(",")[randomNumber];
  }
}

const app = new App();
app.play();

module.exports = App;
