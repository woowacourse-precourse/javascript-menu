class Coach {
  #name;
  #hateFood = [];
  #ateBeforeFood = [];
  constructor(name) {
    this.#name = name;
  }
  registerHateFood(foods) {
    this.#hateFood.push(...foods);
  }
  canEat(food) {
    if (this.#hateFood.includes(food)) return false;
    return true;
  }
  ateBefore(food) {
    if (this.#ateBeforeFood.includes(food)) return true;
    return false;
  }
  writeEatingRecord(food) {
    this.#ateBeforeFood.push(food);
  }
  getEatingInfo() {}
  getName() {
    return this.#name;
  }
}

module.exports = Coach;
