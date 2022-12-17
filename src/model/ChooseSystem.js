const { Random } = require('@woowacourse/mission-utils');
const CategoryChooser = require('./CategoryChooser');
const MenuChooser = require('./MenuChooser');

class ChooseSystem {
  #menuChooser = new MenuChooser();
  #categories;
  #coachNames = [];
  #bans = {};
  #results = {};

  shuffleCategory() {
    this.#categories = CategoryChooser.choose();
  }
}

module.exports = MenuChooser;
