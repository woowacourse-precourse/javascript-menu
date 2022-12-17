const { Console } = require("@woowacourse/mission-utils");
const Coach = require("./Coach");
const { NEW_LINE } = require("./Constant");
const { CATEGORY } = require("./data");
const { readCoachName, readCoachPickyFoods } = require("./InputView");
const { print, printResult } = require("./OutputView");
const { getMenu, getFood } = require("./RandomMachine");
const {
  validateCoachNumber,
  validateNameLength,
  validatePickyFoods,
} = require("./Validation");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

class App {
  #coaches = [];

  getCoachName() {
    readCoachName(this.actWithCoachName.bind(this));
  }

  actWithCoachName(nameInput) {
    const names = nameInput.split(",");
    console.log(names);
    try {
      validateCoachNumber(names);
      this.makeEachCoachField(names);
      this.getPickyFoods(0);
    } catch (e) {
      print(e);
      this.getCoachName();
    }
  }

  makeEachCoachField(names) {
    names.forEach((name, ind) => {
      try {
        validateNameLength(name);
        this.#coaches.push(new Coach(name, ind));
      } catch (e) {
        print(e);
        this.getCoachName();
      }
    });
  }

  getPickyFoods(i) {
    if (i === this.#coaches.length) {
    }

    readCoachPickyFoods(this.#coaches[i], this.actWithPickyFoods.bind(this));
  }

  actWithPickyFoods(coach, foods) {
    const pickyFoods = foods.split(",").map((food) => food.trim());
    try {
      validatePickyFoods(pickyFoods);
      coach.setPickyFoods(pickyFoods);
      while (coach.getMenuLength() < 5) {
        this.recommandFoods(coach);
      }
    } catch (e) {
      print(e);
      this.getPickyFoods(coach);
    }
    this.getPickyFoods(coach.getNumber() + 1);
  }

  recommandFoods(coach) {
    const category = getMenu();
    console.log(coach);
    if (coach.compareCateogry(category)) {
      const food = getFood(category);
      if (coach.compareFood(food)) {
        coach.setFoodtoMenu(category, food);
      }
    }
  }

  getResultLines() {
    return this.#coaches.map((coach) => coach.getResult()).join(NEW_LINE);
  }

  endGame() {
    const resultLines = this.getResultLines();
    printResult(resultLines);
    Console.close();
  }

  play() {
    this.getCoachName();
  }
}

new App().play();
module.exports = App;
