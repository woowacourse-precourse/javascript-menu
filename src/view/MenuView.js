const GameView = require('./GameView');

class MenuView extends GameView {
  // retryWhenError: 에러 발생 시 에러 문구 출력 후 재시작
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

  // closeWhenError: 에러 발생 시 에러 문구 출력 후 종료
  #closeWhenError(callback) {
    return input => {
      try {
        callback(input);
      } catch (error) {
        this.#errorHandler(error);
        this.outputView.close();
      }
    };
  }

  #errorHandler(error) {
    this.outputView.printErrorMessage(error);
  }

  // readBridgeSize(callback) {
  //   this.inputView.readBridgeSize(
  //     this.#retryWhenError(this.readBridgeSize.bind(this), callback),
  //     // this.#closeWhenError(callback),
  //   );
  // }

  // readMoving(callback) {
  //   this.inputView.readMoving(this.#retryWhenError(this.readMoving.bind(this), callback));
  // }

  // printErrorMessage(error) {
  //   this.outputView.printErrorMessage(error);
  // }
}

module.exports = MenuView;
