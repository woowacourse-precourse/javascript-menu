const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const Validator = require("../Validator");
const Recommend = require("../model/Recommend");

class Controller {
  #coaches;
  #hates = [];
  #idx = 0;

  init() {
    OutputView.printInit();
    this.inputCoachesHandler();
  }

  inputCoachesHandler() {
    InputView.readCoaches(this.coachesHandler.bind(this));
  }

  coachesHandler(coaches) {
    try {
      Validator.validateCoach(coaches.split(","));
      this.#coaches = coaches.split(",");
      this.inputHateHandler(this.#idx);
    } catch (error) {
      Console.print(error);
      this.inputCoachesHandler();
    }
  }

  inputHateHandler(coachIdx) {
    if (this.#idx == this.#coaches.length) this.resultHandler();
    if (this.#idx < this.#coaches.length)
      InputView.readHates(this.#coaches[coachIdx], this.hateHandler.bind(this));
  }

  hateHandler(hates) {
    try {
      this.makeHates(hates.split(","));
    } catch (error) {
      Console.print(error);
      this.inputHateHandler(this.#idx);
    }
  }

  makeHates(hates) {
    this.#hates.push(hates);
    this.#idx += 1;
    this.inputHateHandler(this.#idx);
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
