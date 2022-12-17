class Menu {
  constructor(name) {
    this.name = name;
  }

  setList(menus) {
    this.list = menus.split(', ');
  }
}

module.exports = Menu;
