const { Random } = require("@woowacourse/mission-utils");
const inputView = require("../view/inputView");
const outputView = require("../view/outputView");
const Category = require("../model/category");
const Coach = require("../model/coach");
const FoodDB = require("../model/foodDb");
const validation = require("../validation");

class Recommendation {
  #output;
  #input;
  #categories;
  #coaches;
  #coachIdx;
  #schedule;
  #served;

  constructor() {
    this.#output = outputView;
    this.#input = inputView;
    this.#categories = [];
    this.#coaches = [];
    this.#coachIdx = 0;
    this.#schedule = [];
    this.served = {};
  }
  #init() {
    const foodDb = new FoodDB();
    const food = foodDb.getFood();

    const foodKeys = Object.keys(food);
    const foodValues = Object.values(food);
    const length = foodKeys.length;

    for (let i = 0; i < length; i++) {
      this.#categories.push(new Category(foodKeys[i], foodValues[i]));
    }
  }
  #getCurrentCoach() {
    return this.#coaches[this.#coachIdx];
  }
  #addHatesToCurrentCoach(hates) {
    this.#getCurrentCoach().addHates(hates);
    this.#coachIdx++;
  }
  #isCoachLengthExceed() {
    return this.#coachIdx >= this.#coaches.length;
  }
  #processNames(names) {
    const splitNames = names.split(",").map((v) => v.trim());
    validation.validateCoachLength(splitNames);

    splitNames.forEach((name) => {
      validation.validateCoachName(name);
      this.#coaches.push(new Coach(name));
    });

    const curCoach = this.#getCurrentCoach().getName();
    this.#input.askHates(curCoach, this.#processHates.bind(this));
  }
  #processHates(hates) {
    validation.validateHates(hates);
    this.#addHatesToCurrentCoach(hates);

    if (this.#isCoachLengthExceed()) {
      this.#processResult();
      return;
    }

    const curCoach = this.#getCurrentCoach().getName();
    this.#input.askHates(curCoach, this.#processHates.bind(this));
  }
  #convertNumberToCategory(num) {
    return this.#categories[num - 1].getName();
  }
  #processResult() {
    //요일 별로 카테고리를 추천 받는다.
    while (this.#schedule.length < 5) {
      const random = Random.pickNumberInRange(1, 5);
      if (validation.isCategoryRepatedOver(random, this.#schedule)) {
        continue;
      }
      this.#schedule.push(random);
    }

    //카테고리별로 코치에 대해서 싫어하는 음식을 제외한 음식을 추천한다.
    for (let i = 0; i < this.#schedule.length; i++) {
      for (let j = 0; j < this.#coaches.length; j++) {
        const categoryIdx = this.#schedule[i] - 1;
        const coach = this.#coaches[j];
        let menu = this.#categories[categoryIdx].recommend();

        while (coach.getHates().includes(menu)) {
          menu = this.#categories[categoryIdx].recommend();
        }
        coach.addServes(menu);
      }
    }

    this.#output.result();
    this.#output.printDay();

    const categories = ["카테고리"];
    for (let i = 0; i < this.#schedule.length; i++) {
      categories.push(this.#convertNumberToCategory(this.#schedule[i]));
    }

    console.log(categories.join(" | "));
    for (let i = 0; i < this.#coaches.length; i++) {
      const coach = this.#coaches[i];
      this.#output.printSchedule(coach.getName(), coach.getServes());
    }

    this.#output.complete();
  }

  start() {
    this.#init();
    this.#output.start();
    this.#input.askName(this.#processNames.bind(this));
  }
}

module.exports = Recommendation;
