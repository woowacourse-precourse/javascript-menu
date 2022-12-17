class Coach {
  constructor(name) {
    this.name = name;
    this.dislikeMenu = [];
    this.lunch = [];
  }

  validateMenu(todayMenu) {}

  setLunch(todayMenu) {
    let recommend = false;

    this.dislikeMenu.forEach((dislike) => {
      if (dislike !== todayMenu) recommend = true;
      else recommend = false;
    });

    if (recommend) this.lunch.push(todayMenu);
  }

  getLunch() {
    return this.lunch;
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
