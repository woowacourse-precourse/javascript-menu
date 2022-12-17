const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;

const RandomUtil = {
    randomCategory() {
        const categoryNumber = Random.pickNumberInRange(1, 5);
        return categoryNumber;
    },

    randomMenu(menus) {
        const menu = Random.shuffle(menus)[0];
        return menu;
    }
};

module.exports = RandomUtil;