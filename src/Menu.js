class Menu {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  setList(menus) {
    this.list = menus.split(', ');
  }
}

module.exports = Menu;
