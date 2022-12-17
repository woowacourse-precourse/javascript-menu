class Menus {
  #state = [];

  add(menu) {
    this.#state = [...this.#state, menu];
  }

  contains(menu) {
    return this.#state.includes(menu);
  }

  toString() {
    return this.#state.join(' | ');
  }
}

module.exports = Menus;
