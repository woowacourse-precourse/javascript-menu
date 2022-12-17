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

const categorysNames = Object.keys(SAMPLE);

class App {
  categorys = [];

  getCategoryCount(target) {
    return this.categorys.reduce((count, category) => {
      if (target === category) {
        return (count += 1);
      }
      return count;
    }, 0);
  }

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

    Array.from({ length: 5 }).forEach(() => {
      this.decideCategory();
    });

    this.printResultRecommendMenu();
  }

  decideCategory() {
    const categoryName = this.getCategoryName();

    if (this.getCategoryCount(categoryName) <= 2) {
      this.categorys.push(categoryName);
      this.recommendMenu(categoryName);
      return;
    }
    this.decideCategory();
  }

  getCategoryName() {
    return categorysNames[CategoryRandomNumberGenerator.generate() - 1];
  }

  recommendMenu(categoryName) {
    this.coachs.getCoachName().forEach((coachName) => {
      let ateMenu = this.getEatMenu(categoryName);
      while (
        this.coachs.isAteMenu(coachName, ateMenu) ||
        this.coachs.isNotEatMenu(coachName, ateMenu)
      ) {
        ateMenu = this.getEatMenu(categoryName);
      }
      this.coachs.setAteMenu(coachName, ateMenu);
    });
  }

  getEatMenu(categoryName) {
    const randomNumber = Random.shuffle(
      Array.from({ length: 9 }, (_, i) => i)
    )[0];
    return SAMPLE[categoryName].split(",")[randomNumber];
  }

  printResultRecommendMenu() {
    OutputView.printResultRecommendMenu(
      this.categorys,
      this.coachs.getCoachs()
    );
  }
}

const app = new App();
app.play();

module.exports = App;
