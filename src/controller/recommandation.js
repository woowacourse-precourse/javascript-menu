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

  constructor() {
    this.#output = outputView;
    this.#input = inputView;
    this.#categories = [];
    this.#coaches = [];
    this.#coachIdx = 0;
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
  #processResult() {
    this.#output.result();
    this.#output.complete();
  }

  start() {
    this.#init();
    this.#output.start();
    this.#input.askName(this.#processNames.bind(this));
  }
}

module.exports = Recommendation;
