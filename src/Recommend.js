const MissionUtils = require('@woowacourse/mission-utils');
const { MenuConfig } = require('./Config');

const Recommend = {
  randomCategory() {
    const categoryNumber = MissionUtils.Random.pickNumberInRange(1, MenuConfig.CATEGORIES + 1);
    return MenuConfig[categoryNumber];
  },
};

module.exports = Recommend;
