class CoachHateMenus {
  #data;

  constructor() {
    this.#data = [];
  }

  set(input) {
    this.#data.push(input.split(','));
  }

  pop() {
    this.#data.pop();
  }

  get() {
    return this.#data;
  }
}

module.exports = CoachHateMenus;
