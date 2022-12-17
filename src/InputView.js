const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

class InputView {
  constructor() {
    this.currentCoachFlag = 0;
    this.coachNames = null;
  }

  readCoachName() {
    Console.readLine(
      '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
      (names) => {
        const error = Validation.isValidInput(names);
        if (error) return this.readCoachName();
        const coach = names.split(',');
        this.coachNames = coach;
        this.readUnableToEat();
      }
    );
  }

  readUnableToEat() {
    const coachesList = this.coachNames[this.currentCoachFlag];
    const message = `${coachesList}(이)가 못 먹는 메뉴를 입력해 주세요\n`;

    Console.readLine(`${message}`, (menusCoachCantEat) => {
      try {
        const divideMenusCoachCantEat = menusCoachCantEat.split(',');

        if (coachesList.length > this.currentCoachFlag) {
          this.currentCoachFlag += 1;
          return this.readUnableToEat();
        }
      } catch (error) {
        Console.print(error.message);
        this.readUnableToEat();
      }
    });
  }
}

module.exports = InputView;
