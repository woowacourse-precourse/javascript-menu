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

  getState() {
    return this.#state;
  }
}

module.exports = Coaches;
