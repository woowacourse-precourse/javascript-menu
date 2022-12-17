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

  readMenuCoachCantEat(callback) {
    this.inputView.readMenuCoachCantEat(
      this.#retryWhenError(() => this.readMenuCoachCantEat(), callback),
    );
  }

  // TODO: 코치 이름을 메세지에 추가해서 에러 바운더리에서 처리할 수 있게끔 리팩터링
  // readMenuCoachCantEat(message, callback) {
  //   this.inputView.readMenuCoachCantEat(
  //     this.#retryWhenError(this.readMenuCoachCantEat.bind(this), () => callback(message)),
  //   );
  // }

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
