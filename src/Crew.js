const Utils = require('./Utils');

class Crew {
  name;
  menu = {};
  canNotEat = [];

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setCanNotEat(list) {
    const notEatList = Utils.stringConvertor(list);
    this.canNotEat = notEatList;
  }
}

module.exports = Crew;
