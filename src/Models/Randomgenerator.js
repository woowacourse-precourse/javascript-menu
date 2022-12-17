const MissionUtils = require("@woowacourse/mission-utils");

const Randomgenerator = {
  categoryGenerate() {
    return MissionUtils.Random.pickNumberInRange(1,5);
  },

  menuGenerate() {
    return MissionUtils.Random.shuffle([0,1,2,3,4,5,6,7,8])[0];
  }
};

module.exports = Randomgenerator;
