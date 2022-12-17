const MissionUtils = require('@woowacourse/mission-utils');

const MenuRandomNumberGenerator = {
  generate() {
    return MissionUtils.Random.pickNumberInRange(1, 5);
  },
};

module.exports = MenuRandomNumberGenerator;
