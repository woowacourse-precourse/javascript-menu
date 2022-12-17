const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const Validator = require("../Validator");
const Recommend = require("../model/Recommend");

class Controller {
  #coaches;
  #hates = [];
  #totalCoachIdx = 0;

  init() {
    OutputView.printInit();
    this.inputCoachesHandler();
  }

  inputCoachesHandler() {
    InputView.readCoaches(this.coachesHandler.bind(this));
  }

  coachesHandler(coaches) {
    try {
      Validator.validateCoach(coaches.split(",").map((name) => name.trim()));
      this.#coaches = coaches.split(",").map((name) => name.trim());
      this.inputHateHandler(this.#totalCoachIdx);
    } catch (error) {
      Console.print(error);
      this.inputCoachesHandler();
    }
  }

  inputHateHandler(coachIdx) {
    if (this.#totalCoachIdx == this.#coaches.length) this.resultHandler();
    if (this.#totalCoachIdx < this.#coaches.length)
      InputView.readHates(this.#coaches[coachIdx], this.hateHandler.bind(this));
  }

  hateHandler(hates) {
    try {
      Validator.validateHates(hates.split(",").map((name) => name.trim()));
      this.makeHates(hates.split(",").map((name) => name.trim()));
    } catch (error) {
      Console.print(error);
      this.inputHateHandler(this.#totalCoachIdx);
    }
  }

  makeHates(hates) {
    this.#hates.push(hates);
    this.#totalCoachIdx += 1;
    this.inputHateHandler(this.#totalCoachIdx);
  }

  resultHandler() {
    this.recommendDishes();
  }

  recommendDishes() {
    const recommend = new Recommend(this.#coaches, this.#hates);
    let [categories, result] = recommend.getResult();
    OutputView.printResult(categories, result);
  }
}

module.exports = Controller;
