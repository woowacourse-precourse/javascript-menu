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

    // 일단 set으로 설정
    coachNames.forEach((name) => {
      this.#coaches.set(name, new Set());
      this.#coachOrder.push(name);
    });
  }

  static getCoachCount() {
    return this.#coaches.size;
  }

  // 순서에 해당하는 코치 이름 반환
  static getName() {
    return this.#coachOrder[this.#inputCount];
  }

  // 코치의 못 먹는 음식 저장
  static addNoFood(foods) {
    const name = this.getName();
    const foodSet = new Set(foods.split(','));

    this.addInputCount();
    this.#coaches.set(name, foodSet);
  }

  static people() {
    return this.#coaches;
  }
}

module.exports = Coach;
