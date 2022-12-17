class Coach {
  name;
  hateMenu;
  recommendedMenu;

  constructor(name, hateMenu) {
    this.name = name;
    this.hateMenu = hateMenu;
    this.recommendedMenu = [];
  }

  checkMenu(menu) {
    if (this.hateMenu.includes(menu)) return false;
    if (this.recommendedMenu.includes(menu)) return false;
    return true;
  }
}

module.exports = Coach;
