const MissionUtils = require("@woowacourse/mission-utils");

const shuffleArray = (array) => {
  const numberArray = Array.from({ length: array.length }, (_, idx) => idx);
  const shffledNumberArray = MissionUtils.Random.shuffle(numberArray);

  return shffledNumberArray.map((index) => array[index]);
};

module.exports = shuffleArray;
