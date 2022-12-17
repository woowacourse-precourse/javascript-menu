const MissionUtils = require('@woowacourse/mission-utils');
const { MenuConfig } = require('./Config');

class Recommend {
  #menu;

  constructor(menuSample) {
    this.#menu = { ...menuSample };
  }
}

module.exports = Recommend;
