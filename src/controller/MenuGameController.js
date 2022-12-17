const { Console } = require('@woowacourse/mission-utils');
const MenuGame = require('../model/MenuGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class menuGameController {
  #menuGame;

  constructor() {
    this.#menuGame = new MenuGame();
  }

  start() {
    OutputView.printOpening();
    InputView.readCoachNames(names => {
      this.#menuGame.setCoaches(names);
    });

    this.inputHateMenu();
  }

  inputHateMenu() {
    Object.keys(this.#menuGame.getCoaches()).forEach(coachName => {
      InputView.readHateMenus(menus => {
        this.#menuGame.addCoachesHateMenus(coachName, menus.split(','));
      }, coachName);
    });

    this.decideWeeklyMenu();
  }

  decideWeeklyMenu() {
    this.#menuGame.decideWeeklyCategoty();
    this.#menuGame.decideWeeklyMenu();

    this.end();
  }

  end() {
    OutputView.printResult(this.#menuGame.getCoaches(), this.#menuGame.getCategoryPlan());
    Console.close();
  }
}

module.exports = menuGameController;
