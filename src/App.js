const { Console } = require("@woowacourse/mission-utils");
const Coach = require("./Coach");
const { NEW_LINE, MESSAGE, RESULT } = require("./Constant");
const { readCoachName, readCoachPickyFoods } = require("./InputView");
const { print, printResult } = require("./OutputView");
const { getMenu, getFood } = require("./RandomMachine");
const {
  validateCoachNumber,
  validateNameLength,
  validatePickyFoods,
} = require("./Validation");

class App {
  #coaches = [];
  #category = [];

  getCoachName() {
    readCoachName(this.actWithCoachName.bind(this));
  }

  actWithCoachName(nameInput) {
    const names = nameInput.split(",").map((name) => name.trim());
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
      this.endGame();
      return;
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
    const number = coach.getNumber();
    number === 0
      ? this.initallizeCateogry(coach, category)
      : this.getOnlyFood(coach);
  }

  initallizeCateogry(coach, category) {
    if (coach.compareCategory(category)) {
      const food = getFood(category);
      if (coach.compareFood(food)) {
        coach.addFoodtoMenu(category, food);
        this.#category.push(category);
      }
    }
  }

  getOnlyFood(coach) {
    const menu = coach.getMenuLength();
    if (coach.compareFood(this.#category[menu])) {
      coach.addFoodtoMenu(this.#category[menu], food);
    }
  }

  getResultLines() {
    return this.#coaches.map((coach) => coach.getResult()).join(NEW_LINE);
  }

  endGame() {
    const resultLines = this.getResultLines();
    const categories = `[ ${this.#category.join(RESULT.divider)} ]`;
    printResult(resultLines, categories);
    Console.close();
  }

  play() {
    print(MESSAGE.start);
    this.getCoachName();
  }
}

new App().play();
module.exports = App;
