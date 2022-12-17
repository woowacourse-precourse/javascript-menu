class Coach {
  #name;
  #nonEdibleMenu;

  setNonEdibleMenus(menus) {
    this.#nonEdibleMenu = menus;
    console.log(this.#nonEdibleMenu);
  }
}

module.exports = Coach;
