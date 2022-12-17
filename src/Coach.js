class Coach {
  #name;
  #cantFoods;
  constructor(name, cantFoods) {
    this.#name = name;
    this.#cantFoods = cantFoods;
  }

  printInfo(printFunc) {
    printFunc([this.#name, ...this.#cantFoods]);
  }
}

module.exports = Coach;
