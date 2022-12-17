class Coaches {
  #state;

  constructor(coaches) {
    this.#state = coaches;
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
