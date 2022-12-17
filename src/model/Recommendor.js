class Recommendor {
  #coaches = [];
  #hateMenus = [];

  setCoaches(coaches) {
    this.#coaches = coaches;
  }

  getCoaches() {
    return this.#coaches;
  }

  setHateMenuLists(menus) {
    this.#hateMenus.push(menus);
  }
}

module.exports = Recommendor;
