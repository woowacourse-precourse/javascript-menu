class Coach {
  #name;
  #hateFood = [];
  #ateBeforeFood = [];
  #day = ["월", "화", "수", "목", "금"];
  #logs = [];
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
  writeEatingRecord(loop, food, category) {
    this.#ateBeforeFood.push(food);
    this.#saveEatingInfo({
      day: this.#day[loop],
      food,
      category,
    });
  }
  #saveEatingInfo(info) {
    this.#logs.push(info);
  }
  getEatingInfo() {
    return this.#logs;
  }
  getName() {
    return this.#name;
  }
}

module.exports = Coach;
