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

  readUserInputInedible(coaches, coachNames) {
    this.#inputView.readInedible((input) => {
      console.log(input);
      //  this.handleInedibleInput(input, coaches[this.#counter]);
    }, coachNames[this.#counter]);
    if (this.#counter < coachNames.length) {
      this.readUserInputInedible(coachNames, coaches);
    }
  }

  handleCoachNamesInput(input) {
    //try{
    const names = input.split(',');
    validate.names(names);
    this.#menuRecommender = new MenuRecommender(names);
    const coaches = this.#menuRecommender.getCoaches();
    const coachNames = coaches.map((coach) => coach.getName());
    this.readUserInputInedible(coaches, coachNames);
    //}
    //catch (error) {
    //	this.#outputView.printError(ERROR.invalidName);
    //	this.readUserInputCoachNames();
    //}
  }

  handleInedibleInput(input, coach) {
    //try {
    if (input === '') {
      this.#counter = this.#counter + 1;
      return;
    }
    const inedible = input.split(',');
    validate.inedible(inedible);
    for (item of inedible) {
      coach.addInedible(item);
    }
    this.#counter = this.#counter + 1;
    //} catch (error) {
    //  this.#outputView.printError(ERROR.invalidInedible);
    //}
  }
}

module.exports = MenuRecommenderController;
