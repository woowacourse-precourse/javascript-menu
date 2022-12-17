const OutputView = require("./OutputView");
const InputView = require("./InputView");
const Validate = require("./Validate");
const LunchModel = require("./LunchModel");

class Controller {

  constructor() {
    this.validate =  new Validate();
  }

  play() {
    OutputView.printStart();
    this.requestUser();
  }

  requestUser() {
    InputView.readName(this.tryBuildUser.bind(this));
  }

  tryBuildUser(name) {
    try {

    } catch(error) {

    }
  }

  
}

module.exports = Controller;