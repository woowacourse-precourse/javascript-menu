class Coach {
  constructor(name) {
    this.name = name;
    this.dislikeMenu = [];
  }

  getName() {
    return this.name;
  }

  setDislikeMenu(menu) {
    this.dislikeMenu.push(menu);
  }
}

// const model = new Model();

module.exports = Coach;
