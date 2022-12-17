const inputView = require('../viewer/inputView');
const outputView = require('../viewer/outputView');
const MenuRecommender = require('../model/MenuRecommender');

class MenuRecommenderController {
  #inputView;
  #outputView;
  #menuRecommender;

  constructor() {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#outputView.printStart();
    this.readUserInputCoachNames();
  }
}

module.exports = MenuRecommenderController;
