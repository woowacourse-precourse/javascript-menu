class Recommendor {
  #coaches = [];

  setCoaches(coaches) {
    this.#coaches = coaches;
  }

  getCoaches() {
    return this.#coaches;
  }
}

module.exports = Recommendor;
