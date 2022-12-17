const MissionUtils = require("@woowacourse/mission-utils");
const MenuService = require("./Model/MenuService");
const OutputView = require("./View/OutputView");
const InputView = require("./View/InputView");

class App {
  #menuService;

  getMenuService() {
    this.#menuService;
  }

  play() {
    OutputView.printStartComment();
    this.#menuService = new MenuService("name");
    this.#controller();
  }

  #controller() {
    if (this.#menuService.getStatus() == "name") this.#name();
    else if (this.#menuService.getStatus() == "menu") this.#menu();
    else if (this.#menuService.getStatus() == "result") this.#result();
  }

  #readNamesCallback = (names) => {
    try {
      this.#menuService.setNames(names);
      this.#menuService.setStatus("menu");
      this.#controller();
    } catch (err) {
      this.#reset(err);
    }
  };

  #readPickyMenuCallback = (name, pickyMenu) => {
    try {
      this.#menuService.makeCoach(name, pickyMenu);
      this.#menuService.passName();
      this.#controller();
    } catch (err) {
      this.#reset(err);
    }
  };

  #name() {
    InputView.readNames(this.#readNamesCallback);
  }

  #menu() {
    const names = this.#menuService.getNames();

    if (names.length == 0) {
      this.#recommend();
      return;
    }

    InputView.readPickyMenu(names[0], this.#readPickyMenuCallback);
  }

  #recommend() {
    this.#menuService.setStatus("result");
    this.#controller();
  }

  #result() {
    OutputView.printMenuResult(this.#menuService);
  }

  #reset(err) {
    MissionUtils.Console.print(err.message);
    this.#controller();
  }
}

module.exports = App;
