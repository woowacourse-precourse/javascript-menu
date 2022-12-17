class Coach {
  #name;
  #hateFood = [];
  constructor(name) {
    this.#name = name;
  }
  registerHateFood(foods) {
    this.#hateFood.push(...foods);
  }
  canEat(food) {}
  ateBefore(food) {}
  writeEatingRecord(food) {}
  getEatingInfo() {}
  getName() {
    return this.#name;
  }
}

module.exports = Coach;
