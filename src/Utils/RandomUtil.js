const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;

const RandomUtil = {
    randomCategory() {
        const categoryNumber = Random.pickNumberInRange(1, 5);
        return categoryNumber;
    },

    randomMenu(menus) {
        const menu = Random.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8])[1];
        return menus[menu];
    }
};

module.exports = RandomUtil;