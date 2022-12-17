const MissionUtils = require('@woowacourse/mission-utils');
const { MenuConfig } = require('./Config');

const sequenced = (_, idx) => idx + 1;

const Recommend = {
  randomCategory() {
    const categoryNumber = MissionUtils.Random.pickNumberInRange(1, MenuConfig.CATEGORIES + 1);
    return MenuConfig[categoryNumber];
  },

  randomMenu(category, menu) {
    const menuList = menu[category].trim().split(', ');
    const menuIndexArray = Array.from({ length: menuList.length }, sequenced);
    const menuNumber = MissionUtils.Random.shuffle(menuIndexArray)[0];
    return menuList[menuNumber - 1];
  },
};

module.exports = Recommend;
