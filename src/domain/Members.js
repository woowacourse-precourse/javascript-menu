const Members = class {
  #names;

  #hateMenus;

  saveNames(names) {
    this.#names = names;
    this.#hateMenus = [];
  }

  pushHateMenus(hateMenus) {
    this.#hateMenus.push(hateMenus);
  }
};

module.exports = Members;
