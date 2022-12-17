const GameView = require('./GameView');

class MenuView extends GameView {
  #retryWhenError(callerFunction, callback) {
    return input => {
      try {
        callback(input);
      } catch (error) {
        this.#errorHandler(error);
        callerFunction(callback);
      }
    };
  }

  #errorHandler(error) {
    this.outputView.printErrorMessage(error);
  }

  readCoachesName(callback) {
    this.inputView.readCoachesName(this.#retryWhenError(this.readCoachesName.bind(this), callback));
  }

  readMenuCoachCantEat(message, callback) {
    this.inputView.readMenuCoachCantEat(
      this.#retryWhenError(this.readMenuCoachCantEat.bind(this), callback),
    );
  }

  printStartMessage() {
    this.outputView.printStartMessage();
  }

  printMenuList(menuList) {
    this.outputView.printMenuList(menuList);
  }

  printEndMessage() {
    this.outputView.printEndMessage();
  }
}

module.exports = MenuView;
