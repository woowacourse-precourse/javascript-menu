class Menus {
  #state = [];

  add(menu) {
    this.#state = [...this.#state, menu];
  }

  contains(menu) {
    return this.#state.includes(menu);
  }

  getState() {
    return this.#state;
  }
}

module.exports = Menus;
