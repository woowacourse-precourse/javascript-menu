class Coaches {
  #state;

  constructor(coaches) {
    Coaches.#validate(coaches);
    this.#state = coaches;
  }

  static #validate(coaches) {
    if (Coaches.#isOutOfRange(coaches)) {
      throw Error('[ERROR] 코치 수는 최소 2명, 최대 5명이어야 합니다.');
    }
  }

  static #isOutOfRange(coaches) {
    return coaches.length < 2 || coaches.length > 5;
  }

  getCoach(index) {
    return this.#state[index];
  }

  setCoachMenu(index, menus) {
    this.#state[index].setMenus(menus);
  }

  count() {
    return this.#state.length;
  }

  getCoachName(index) {
    return this.#state[index].getName();
  }

  getState() {
    return this.#state;
  }
}

module.exports = Coaches;
