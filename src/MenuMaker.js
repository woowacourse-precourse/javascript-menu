const MissionUtils = require('@woowacourse/mission-utils');

class MenuMaker {
  constructor() {
    this.SAMPLE = {};
    this.userName = [];
  }

  creatMenu() {
    const selectMenu = this.selectMenu(this.SAMPLE, this.randomCategories());
  }

  selectMenu(SAMPLE, select) {
    if (select === 1) {
      return SAMPLE.일식;
    }
    if (select === 2) {
      return SAMPLE.한식;
    }
    if (select === 3) {
      return SAMPLE.중식;
    }
    if (select === 4) {
      return SAMPLE.아시안;
    }
    if (select === 5) {
      return SAMPLE.양식;
    }
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
