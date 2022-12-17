//TODO: 각 코치를 객체에서 관리한다면 좋을듯하다
//TODO: 배열이 아니라
class Coach {
  static #coaches = new Map();
  static #inputCount = 0;
  static #coachOrder = [];

  static addInputCount() {
    this.#inputCount += 1;
  }

  static getInputCount() {
    return this.#inputCount;
  }

  static create(names) {
    const coachNames = names.split(',');
    coachNames.forEach((name) => {
      // 일단 set으로 설정
      this.#coaches.set(name, new Set());
      this.#coachOrder.push(name);
    });
  }

  static getCoachCount() {
    return this.#coaches.size;
  }

  static getName() {
    return this.#coachOrder[this.#inputCount];
  }
}

module.exports = Coach;
