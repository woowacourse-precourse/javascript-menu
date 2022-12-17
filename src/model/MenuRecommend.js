const MissionUtils = require("@woowacourse/mission-utils");

class MenuRecommend {
    #menu

    constructor(menu) {
        this.#menu = menu;
    }

    recommendCategory() {
        const categorys = this.#menu.keys();
        return categorys.get(MissionUtils.Random.pickNumberInRange(0, 4));
    }
    recommendFood(category) {
        const foods = this.#menu[category];
        return MissionUtils.Randoms.shuffle(foods)[0];
    }
}

module.exports = MenuRecommend;