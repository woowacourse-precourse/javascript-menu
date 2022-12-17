class UnLikeMenu {
  #unLikeMenu;

  constructor(input) {
    this.validate(input);
    this.#unLikeMenu = input.split(",");
  }

  validate(input) {}

  getUnLikeMenu() {
    return this.#unLikeMenu;
  }
}

module.exports = UnLikeMenu;
