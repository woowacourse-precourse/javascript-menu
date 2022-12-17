const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;

const RandomUtil = {
    randomCategory() {
        const categoryNumber = Random.pickNumberInRange(1, 5);
        return categoryNumber;
    },

    randomMenu(menus) {
        const splitMenus = menus.split(', ');
        const menu = Random.shuffle(splitMenus)[0];
        const result = splitMenus[menu];
        return result;
    }
};

module.exports = RandomUtil;