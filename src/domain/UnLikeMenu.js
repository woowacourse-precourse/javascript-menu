class UnLikeMenu {
  #unLikeMenu;

  constructor(input) {
    this.#unLikeMenu = input.split(",");
  }

  getUnLikeMenu() {
    return this.#unLikeMenu;
  }
}

module.exports = UnLikeMenu;
