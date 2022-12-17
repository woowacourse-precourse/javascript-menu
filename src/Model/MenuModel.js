class MenuModel {
  #coaches;

  constructor() {
    this.cantEat = [];
  }

  setCoaches(coaches) {
    this.#coaches = coaches;
  }

  setCantEat(cantEat) {
    this.cantEat = [...this.cantEat, cantEat];
    console.log(this.#coaches, this.cantEat);
  }
}

module.exports = MenuModel;
