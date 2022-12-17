class CoachHateMenus {
  #data;

  set(input) {
    this.#data = input.split(',');
  }

  get() {
    return this.#data;
  }
}

module.exports = CoachHateMenus;
