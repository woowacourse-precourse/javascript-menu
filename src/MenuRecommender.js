class MenuRecommender {
  #noNoMenus = {};

  setNoNoMenus(coachName, menuArr) {
    this.#noNoMenus[coachName] = menuArr;
    console.log(this.#noNoMenus);
  }
}

module.exports = MenuRecommender;
