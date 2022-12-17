class Coach {
  #menuList = [];

  constructor(name) {
    this.name = name;
    this.avoid = [];
  }

  setAvoidMenu(avoidMenu) {
    if (avoidMenu !== '') { this.avoid = avoidMenu.split(','); }
  }
}

module.exports = Coach;
