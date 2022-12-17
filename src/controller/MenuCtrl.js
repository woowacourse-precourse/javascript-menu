const GameCtrl = require('./GameCtrl');
const { NameValidator, MenusCantEatValidator } = require('../validators');

const { GAME_MESSAGE, ERROR_MESSAGE } = require('../constants');

class MenuCtrl extends GameCtrl {
  #currentCoachflag = 0;

  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
    if (this.constructor === GameCtrl) {
      throw new Error(ERROR_MESSAGE.abstract_class);
    }
  }

  start() {
    this.view.printStartMessage();
    this.gameProcess();
  }

  gameProcess() {
    this.#inputCoachName();
  }

  #inputCoachName() {
    this.view.readCoachesName(nameList => {
      const splittedNameList = nameList.split(',');
      NameValidator.validateList(splittedNameList);

      this.model.setCoachesName(splittedNameList);
      this.#inputMenusCoachesCantEat();
    });
  }

  // TODO: 코치 이름을 메세지에 추가해서 에러 바운더리에서 처리할 수 있게끔 리팩터링
  #inputMenusCoachesCantEat() {
    const coachesList = this.model.getCoachesName();

    const coach = coachesList[this.#currentCoachflag];
    const message = `\n${coach}${GAME_MESSAGE.input_menu_coach_cant_eat}`;

    this.view.input(message, menusCoachCantEat => {
      try {
        const splittedMenusCoachCantEat = menusCoachCantEat.split(',');
        MenusCantEatValidator.validateList(splittedMenusCoachCantEat);

        this.model.setMenusCoachesCantEat(splittedMenusCoachCantEat);

        this.#currentCoachflag += 1;
        if (coachesList.length > this.#currentCoachflag) {
          return this.#inputMenusCoachesCantEat();
        }

        return this.#makeRecommendedMenus();
      } catch (error) {
        this.view.output(error.message);
        this.#inputMenusCoachesCantEat();
      }
    });
  }

  #makeRecommendedMenus() {
    // this.model.makeRecommendedMenus();
    console.log('hi');
  }

  end() {}
}

module.exports = MenuCtrl;
