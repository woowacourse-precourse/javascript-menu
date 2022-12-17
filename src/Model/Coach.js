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

  static addNoFood(foods) {
    const name = this.getName();
    const foodSet = new Set(foods.split(','));

    this.#coaches.set(name, foodSet);
    this.addInputCount();
  }

  static people() {
    return this.#coaches;
  }

  static assignMenu(coachName, menus) {
    this.#coaches.set(coachName, menus);
  }

  static toString() {
    const strings = [];

    for (const [name, datas] of this.#coaches) {
      strings.push([name, ...datas].join(' | '));
    }
    return strings;
  }
}

module.exports = Coach;
