const MissionUtils = require('@woowacourse/mission-utils');

class MenuMaker {
  constructor() {
    this.SAMPLE = {};
    this.userName = [];
  }

  creatMenu() {
    return this.selectMenu(this.SAMPLE, this.randomCategories());
  }

  selectMenu(SAMPLE, select) {
    if (select === 1) {
      return this.mixMenu(SAMPLE.일식);
    }
    if (select === 2) {
      return this.mixMenu(SAMPLE.한식);
    }
    if (select === 3) {
      return this.mixMenu(SAMPLE.중식);
    }
    if (select === 4) {
      return this.mixMenu(SAMPLE.아시)안;
    }
    if (select === 5) {
      return this.mixMenu(SAMPLE.양식);
    }
  }

  mixMenu(menus) {
    return MissionUtils.Randoms.shuffle(menus)[0];
  }

  setSAMPLE(SAMPLE) {
    return (this.SAMPLE = SAMPLE);
  }

  setuserName(userName) {
    return (this.userName = userName);
  }

  randomCategories() {
    return MissionUtils.Randoms.pickNumberInRange(1, 5);
  }
}
module.exports = MenuMaker;
