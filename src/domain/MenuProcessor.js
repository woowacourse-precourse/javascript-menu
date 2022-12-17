const { readCoachNames, readUnlikeMenu } = require('../ui/InputView');
const { printStartMenuRecommadationMessage, printMenuRecommendationResult } = require('../ui/OutputView');
const { isValidCoachInputs, isValidUnlikeMenus } = require('../utils/validation/input');

class MenuProcessor {
  #menu;
  #coachs = [];
  #coachIndex = 0;
  #unlikeMenu = {};
  #recommendationResult = {};

  constructor(menu) {
    this.#menu = menu;
  }

  start() {
    this.#startProcess();
  }

  #startProcess() {
    printStartMenuRecommadationMessage();
    this.#setCoachNamesProcess();
  }

  // 코치 이름 받기
  #setCoachNames(input) {
    this.#coachs = input.split(',').map((name) => name.trim());
    if (!isValidCoachInputs(this.#coachs)) return this.#setCoachNamesProcess();
    this.#setUnlikeMenuProcess(this.#coachIndex);
  }

  #setCoachNamesProcess() {
    readCoachNames(this.#setCoachNames.bind(this));
  }

  // 못 먹는 메뉴 입력받기
  #setUnlikeMenu(input) {
    const unlikeMenus = input.split(',').map((name) => name.trim());
    if (!isValidUnlikeMenus(unlikeMenus)) return this.#setUnlikeMenuProcess(this.#coachIndex);
    this.#unlikeMenu[this.#coachs[this.#coachIndex]] = unlikeMenus;
    this.#coachIndex += 1;
    if (this.#coachIndex === this.#coachs.length) {
      return this.#showMenuRecommendationResultProcess();
    }
    this.#setUnlikeMenuProcess(this.#coachIndex);
  }

  #setUnlikeMenuProcess(coachIndex) {
    readUnlikeMenu(this.#coachs[coachIndex], this.#setUnlikeMenu.bind(this));
  }

  // 메뉴 추천 결과 출력하기
  #showMenuRecommendationResultProcess() {
    for (const [coach, unlikeMenus] of Object.entries(this.#unlikeMenu)) {
      this.#recommendationResult[coach] = this.#menu.recommendMenus(unlikeMenus);
    }
    printMenuRecommendationResult(this.#menu.getCategories(), this.#recommendationResult);
  }
}

module.exports = MenuProcessor;
