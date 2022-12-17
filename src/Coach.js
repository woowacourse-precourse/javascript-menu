const Recommend = require('./Recommend');

class Coach {
  #cannotEat;

  constructor(cannotEat) {
    this.#cannotEat = [...cannotEat];
  }

  determineMenu(length, categories, menu) {
    const selected = [];
    categories.forEach((category) => {
      this.#addNewMenu(selected, category, menu);
    });
    return selected;
  }

  #addNewMenu(selected, category, menu) {
    let selectSuccess = false;
    while (!selectSuccess) {
      const newMenu = Recommend.randomMenu(category, menu);
      if (!this.#cannotEat.includes(newMenu) && !selected.includes(newMenu)) {
        selected.push(newMenu);
        selectSuccess = true;
      }
    }
  }
}

module.exports = Coach;
