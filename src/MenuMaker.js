const MissionUtils = require('@woowacourse/mission-utils');

class MenuMaker {
  constructor() {
    this.SAMPLE = {};
    this.userName = [];
  }

  creatMenu() {
    return this.selectMenu(this.SAMPLE, this.userName, this.randomCategories());
  }

  selectMenu(SAMPLE, userName, select) {
    if (select === 1) {
      return this.mixMenu(SAMPLE.일식, userName);
    }
    if (select === 2) {
      return this.mixMenu(SAMPLE.한식, userName);
    }
    if (select === 3) {
      return this.mixMenu(SAMPLE.중식, userName);
    }
    if (select === 4) {
      return this.mixMenu(SAMPLE.아시안, userName);
    }
    if (select === 5) {
      return this.mixMenu(SAMPLE.양식, userName);
    }
  }

  mixMenu(menus, userName) {
    const splitMenus = menus.replace(/ /g, '').split(',');

    const array = menus
      .replace(/ /g, '')
      .split(',')
      .map((v, i) => i);

    return userName.map(
      value => (value = splitMenus[MissionUtils.Random.shuffle(array)[0]])
    );
  }

  setSAMPLE(SAMPLE) {
    return (this.SAMPLE = SAMPLE);
  }

  setuserName(userName) {
    return (this.userName = userName);
  }

  randomCategories() {
    return MissionUtils.Random.pickNumberInRange(1, 5);
  }
}
module.exports = MenuMaker;
