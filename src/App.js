const OutputView = require("./OutputView");
const Validation = require("./Validation");
const { Console, Random } = require("@woowacourse/mission-utils");
const { INPUT } = require("./constants/messages");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

class App {
  constructor() {
    this.names;
    this.index = 0;
    this.foodList = [];
    this.category = [];
    this.selectedCategory = [];
  }

  play() {
    OutputView.start();
    this.inputCoachName();
  }

  inputCoachName() {
    Console.readLine(INPUT.NAME, (names) => {
      this.names = names.split(",");
      this.handleInputNameCount();
    });
  }

  handleInputNameCount() {
    const checkCount = Validation.checkInputNameCount(this.names);
    if (!checkCount) {
      this.inputCoachName();
    }
    this.handleInputNameLength();
  }

  handleInputNameLength() {
    for (let index = 0; index < this.names.length; index++) {
      let nameLength = this.names[index].length;
      let checkLength = Validation.checkInputNameLength(nameLength);
      if (!checkLength) {
        this.inputCoachName();
      }
    }
    this.inputCannotEatFoods();
  }

  inputCannotEatFoods() {
    Console.readLine(`\n${this.names[this.index]}${INPUT.FOOD}`, (foods) => {
      const inputFoods = foods.split(",");
      const checkFoodCount = Validation.checkInputFoodCount(inputFoods.length);

      !checkFoodCount
        ? this.inputCannotEatFoods()
        : (this.foodList.push(inputFoods), (this.index += 1));

      this.names.length !== this.index
        ? this.inputCannotEatFoods()
        : this.getCategory();
    });
  }

  getCategory() {
    for (let day = 0; day < 5; day++) {
      const category = Random.pickNumberInRange(1, 5);
      const overlap = this.category.filter((data) => data === category);
      if (overlap.length >= 2) {
        day--;
        continue;
      }
      this.category.push(category);
    }
    console.log(this.category);
    this.getCategoryMenu();
  }

  getCategoryMenu() {
    const MenuCategory = Object.keys(SAMPLE);
    for (let index = 0; index < this.category.length; index++) {
      const categoryNumber = this.category[index];
      const selectedCategory = MenuCategory[categoryNumber - 1];
      this.selectedCategory.push(selectedCategory);
    }
    console.log(this.selectedCategory);
  }
}

const app = new App();
app.play();

module.exports = App;
