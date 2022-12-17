const MissionUtils = require('@woowacourse/mission-utils');
const { MENU_LIST } = require('./lib/constants');

const RandomGenerator = {
  category: () => MENU_LIST[MissionUtils.Random.pickNumberInRange(1, 5) - 1].category,
  menu: (category) => {
    const [recommend] = MENU_LIST.filter((info) => info.category === category);
    const order = Array(recommend.foodList.length).fill().map((_, i) => i + 1);
    const randomOrder = MissionUtils.Random.shuffle(
      order,
    )[0] - 1;

    return recommend.foodList[randomOrder];
  },
};

module.exports = RandomGenerator;
