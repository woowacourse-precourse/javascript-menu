const MissionUtils = require('@woowacourse/mission-utils');

class MenuMaker {
  constructor(SAMPLE, userName) {
    this.SAMPLE = {};
    this.userName = [];
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
