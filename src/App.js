/* eslint-disable class-methods-use-this */
/* eslint-disable require-yield */
/* eslint-disable no-restricted-syntax */
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const runGenerator = require('./utils/runGenerator');
const Coach = require('./domains/Coach');
const LaunchService = require('./services/LaunchService');
const { CATEGORIES, DAYS } = require('./fixtures');
const AppError = require('./errors/AppError');

class App {
  #inputView = new InputView();

  #outputView = new OutputView();

  #launchService = new LaunchService(CATEGORIES);

  /** @type {Coach[]} */
  #coaches;

  play() {
    runGenerator(this.#run.bind(this));
  }

  * #run() {
    for (const routine of this.#routines()) {
      yield* this.#runRoutine(routine);
      this.#outputView.printDivider();
    }
  }

  * #runRoutine(routine) {
    while (true) {
      try {
        yield* routine;
        break;
      } catch (error) {
        this.#handleError(error);
      }
    }
  }

  #handleError(error) {
    if (!(error instanceof AppError)) throw error;

    this.#outputView.printError(error);
  }

  * #routines() {
    yield this.#routinePrintHello();
    yield this.#routineReadCoaches();
    for (const coach of this.#coaches) {
      yield this.#routineReadDislikeMenus(coach);
    }
    yield this.#routinePrintSuggestionTable();
    yield this.#routinePrintGoodbye();

    this.#inputView.close();
  }

  * #routinePrintHello() {
    this.#outputView.printHello();
  }

  * #routineReadCoaches() {
    const coachNames = yield (resolve) => this.#inputView.readCoachNames(resolve);
    this.#coaches = coachNames.map((coachName) => new Coach(coachName.trim()));
  }

  /**
   * @param {Coach} coach
   */
  * #routineReadDislikeMenus(coach) {
    const allMenus = this.#launchService.getMenus();
    const menuNames = yield (resolve) => this.#inputView.readDislikeMenuNames(coach, resolve);
    const menus = menuNames.map((menuName) => allMenus.find((menu) => menu.getName() === menuName.trim()) ?? null);
    if (menus.some((menu) => menu === null)) {
      throw new AppError('존재하지 않는 메뉴를 입력하였습니다.');
    }
    if (menus.length > 2) {
      throw new AppError('못 먹는 메뉴는 최소 0개, 최대 2개까지 입력할 수 있습니다.');
    }
    coach.setDislikeMenus(menus);
  }

  * #routinePrintSuggestionTable() {
    const categories = this.#launchService.suggestCategories(DAYS);
    const menuTable = this.#launchService.suggestMenuTable(this.#coaches, categories);
    this.#outputView.printSuggestionTable(DAYS, categories, this.#coaches, menuTable);
  }

  * #routinePrintGoodbye() {
    this.#outputView.printGoodbye();
  }
}

module.exports = App;
