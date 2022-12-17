class Coach {
  #data = {
    names: [],
    hateMenus: [],
  };

  constructor(inputNames) {
    this.#data.names = inputNames.split(',');
  }

  get() {
    return this.#data;
  }
}

module.exports = Coach;
