const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validate = require("./Validate");
const LunchModel = require("./LunchModel");

class Controller {

  constructor() {
    this.validate =  new Validate();
    this.lunchModel = new LunchModel();
  }

  play() {
    OutputView.printStart();
    this.requestUser();
  }

  requestUser() {
    InputView.readName(this.tryBuildUser.bind(this));
  }

  requestFood() {
    InputView.readMenu(this.tryBuildFood.bind(this));
  }

  tryBuildUser(name) {
    try {
      this.validate.validateUserName(name);
      this.lunchModel(name);
      this.requestFood();
    } catch(error) {
      this.retryRequestUser();
    }
  }

  tryBuildFood(food) {
    try {
      this.validate.validateFood(food);
      this.lunchModel(food);
      this.requestFood();
    } catch(error) {
      this.retryRequestFood();
    }
  }

  retryRequestUser() {
    OutputView.printSizeError();
    this.requestUser();
  }

  retryRequestFood() {
    OutputView.printMenuError();
    this.requestFood();
  }

}

module.exports = Controller;