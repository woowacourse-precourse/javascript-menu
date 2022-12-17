class GameRepo {
  #model;

  constructor() {
    this.#model = new Map();
  }

  read(modelKey) {
    return this.#model.get(modelKey);
  }

  update(modelKey, newData) {
    this.#model.set(modelKey, newData);
  }
}

module.exports = GameRepo;
