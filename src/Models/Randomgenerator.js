const MissionUtils = require("@woowacourse/mission-utils");

const Randomgenerator = {
  categoryGenerate() {
    return MissionUtils.Random.pickNumberInRange(1,5);
  },
};

module.exports = Randomgenerator;
