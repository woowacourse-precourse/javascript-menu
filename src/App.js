/* eslint-disable require-yield */
/* eslint-disable no-restricted-syntax */
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const runGenerator = require('./utils/runGenerator');
const Coach = require('./domains/Coach');
const LaunchService = require('./services/LaunchService');
const { CATEGORIES, DAYS } = require('./fixtures');

class App {
  #inputView = new InputView();

  #outputView = new OutputView();

  #launchService = new LaunchService(CATEGORIES);

  /** @type {Coach[]} */
  #coaches;

  play() {
    runGenerator(this.#routines.bind(this));
  }

  * #routines() {
    yield* this.#routinePrintHello();
    yield* this.#routineReadCoaches();
    for (const coach of this.#coaches) {
      yield* this.#routineReadDislikeMenus(coach);
    }
    yield* this.#routinePrintSuggestionTable();
    yield* this.#routinePrintGoodbye();

    this.#inputView.close();
  }

  * #routinePrintHello() {
    this.#outputView.printHello();
  }

  * #routineReadCoaches() {
    this.#coaches = yield (resolve) => this.#inputView.readCoaches(resolve);
  }

  /**
   * @param {Coach} coach
   */
  * #routineReadDislikeMenus(coach) {
    yield (resolve) => {
      this.#inputView.readDislikeMenus(coach, this.#launchService.getMenus(), resolve);
    };
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
