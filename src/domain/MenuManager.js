class MenuManager {
  #coachs;

  constructor(coachs) {
    this.#coachs = coachs;
  }

  getFirstCoach() {
    return this.#coachs[0];
  }

  getNextCoach(name) {
    for (let i = 0; i < this.#coachs.length; i++) {
      if (i === this.#coachs.length - 1) return false;
      if (this.#coachs[i].getName() === name) return this.#coachs[i + 1];
    }
  }
}

module.exports = MenuManager;
