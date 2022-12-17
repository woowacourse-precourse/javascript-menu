const UnLikeMenu = require("./UnLikeMenu");

class Coach {
  #name;
  #unLikeMenu;

  constructor(name) {
    this.#name = name;
  }

  setUnLikeMenu(menu) {
    this.#unLikeMenu = new UnLikeMenu(menu);
  }

  getUnLikeMenu() {
    return this.#unLikeMenu.getUnLikeMenu();
  }

  getName() {
    return this.#name;
  }
}
