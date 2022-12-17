const { OUTPUT_MESSAGES } = require('../constants/messages');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuController {
  #coachMembers;
  #unableToEatMenu = [];

  constructor() {}

  start() {
    OutputView.printStart(OUTPUT_MESSAGES.start);
    this.getCoachName();
  }

  getCoachName() {
    const callback = (coachName) => {
      try {
        this.#coachMembers = coachName.split(',');
        // 예외처리 : 코치 이름 2글자 ~ 4글자가 아닌 경우
        // 예외처리 : 코치 2명 이상, 5명 이하가 아닌 경우
        // 예외처리 : 콤마로 구분하지 않는 경우
        this.getUnableToEatMenu();
      } catch (error) {
        console.log(error);
      }
    };

    InputView.readCoachName(callback);
  }

  getUnableToEatMenu() {
    if (this.#coachMembers.length === 2) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus.split(',') });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus.split(',') });
          console.log(this.#unableToEatMenu);
        });
      });
    }

    // TODO : 리팩토링
    if (this.#coachMembers.length === 3) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus });
          InputView.readCoachUnableEatMenu(this.#coachMembers[2], (menus) => {
            this.#unableToEatMenu.push({ [this.#coachMembers[2]]: menus });
          });
        });
      });
    }

    if (this.#coachMembers.length === 4) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus });
          InputView.readCoachUnableEatMenu(this.#coachMembers[2], (menus) => {
            this.#unableToEatMenu.push({ [this.#coachMembers[2]]: menus });
            InputView.readCoachUnableEatMenu(this.#coachMembers[3], (menus) => {
              this.#unableToEatMenu.push({ [this.#coachMembers[3]]: menus });
            });
          });
        });
      });
    }

    if (this.#coachMembers.length === 5) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus });
          InputView.readCoachUnableEatMenu(this.#coachMembers[2], (menus) => {
            this.#unableToEatMenu.push({ [this.#coachMembers[2]]: menus });
            InputView.readCoachUnableEatMenu(this.#coachMembers[3], (menus) => {
              this.#unableToEatMenu.push({ [this.#coachMembers[3]]: menus });
              InputView.readCoachUnableEatMenu(this.#coachMembers[4], (menus) => {
                this.#unableToEatMenu.push({ [this.#coachMembers[4]]: menus });
              });
            });
          });
        });
      });
    }
  }
}

module.exports = MenuController;
