const Coach = require("./Coach");
const { NEW_LINE } = require("./Constant");
const { CATEGORY } = require("./data");
const { readCoachName, readCoachPickyFoods } = require("./InputView");
const { print } = require("./OutputView");
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
  #days = ["월요일", "화요일", "수요일", "목요일", "금요일"];

  getCoachName() {
    readCoachName(this.actWithCoachName.bind(this));
  }

  actWithCoachName(nameInput) {
    const names = nameInput.split(",");
    console.log(names);
    try {
      validateCoachNumber(names);
      this.makeEachCoachField(names);
      this.askPickyFoods();
      this.recommandFoods();
    } catch (e) {
      print(e);
      this.getCoachName();
    }
  }

  makeEachCoachField(names) {
    names.forEach((name) => {
      try {
        validateNameLength(name);
        this.#coaches.push(new Coach(name));
      } catch (e) {
        print(e);
        this.getCoachName();
      }
    });
  }

  askPickyFoods() {}

  getPickyFoods(coach) {
    readCoachPickyFoods(coach, this.actWithPickyFoods.bind(this));
  }

  actWithPickyFoods(coach, foods) {
    const pickyFoods = foods.split(",");
    console.log(pickyFoods);
    try {
      validatePickyFoods(pickyFoods);
      coach.setPickyFoods(pickyFoods);
    } catch (e) {
      print(e);
      this.getPickyFoods(coach);
    }
  }

  recommandFoods(coach) {
    const category = getMenu();
    if (coach.compareCateogry(category)) {
      const food = getFood(CATEGORY[category]);
      if (coach.compareFood(food)) {
        coach.setFoodtoMenu(food);
      }
    }
  }

  getResultLines() {
    return this.#coaches.map((coach) => coach.getResult()).join(NEW_LINE);
  }

  play() {
    this.getCoachName();
  }
}

new App().play();
module.exports = App;
