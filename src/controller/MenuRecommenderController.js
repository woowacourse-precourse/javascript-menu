const inputView = require('../viewer/inputView');
const outputView = require('../viewer/outputView');
const validate = require('../util/validation');
const MenuRecommender = require('../model/MenuRecommender');
const { ERROR } = require('../util/constants/message');

class MenuRecommenderController {
  #inputView;
  #outputView;
  #menuRecommender;
  #counter;
  #coaches;
  #coachNames;

  constructor() {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#outputView.printStart();
    this.readUserInputCoachNames();
    this.#counter = 0;
  }

  readUserInputCoachNames() {
    this.#inputView.readCoachNames((input) => {
      this.handleCoachNamesInput(input);
    });
  }

  readUserInputInedible(name, coach) {
    this.#inputView.readInedible((input) => {
      this.handleInedibleInput(input, coach);
    }, name);
  }

  handleCoachNamesInput(input) {
    try {
      const names = input.split(',');
      validate.names(names);
      this.#menuRecommender = new MenuRecommender(names);
      this.#coaches = this.#menuRecommender.getCoaches();
      this.#coachNames = this.#coaches.map((coach) => coach.getName());
      this.readUserInputInedible(
        this.#coachNames[this.#counter],
        this.#coaches[this.#counter]
      );
    } catch (error) {
      this.#outputView.printError(ERROR.invalidName);
      this.readUserInputCoachNames();
    }
  }

  handleInedibleInput(input, coach) {
    try {
      const inedible = input.split(',');
      validate.inedible(inedible);
      for (item of inedible) {
        coach.addInedible(item);
      }
      this.#counter = this.#counter + 1;
      if (this.#counter < this.#menuRecommender.getCoaches().length) {
        this.readUserInputInedible(
          this.#coachNames[this.#counter],
          this.#coaches[this.#counter]
        );
        return;
      }
      this.#menuRecommender.getRecommendation();
      this.#outputView.printRecommendationResult(this.#menuRecommender);
    } catch (error) {
      this.#outputView.printError(ERROR.invalidInedible);
    }
  }
}

module.exports = MenuRecommenderController;
