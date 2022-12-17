const MissionUtils = require("@woowacourse/mission-utils");

class MenuRecommend {
    #menu

    constructor(menu) {
        this.#menu = menu;
    }

    recommendCategory() {
        const categorys = Object.keys(this.#menu);
        return categorys[MissionUtils.Random.pickNumberInRange(1, 5)-1];
    }
    recommendFood(category) {
        const obj = this.#menu[category].split(', ');
        const foods = Object.keys(obj).map(item => obj[item]);
        let random_food = MissionUtils.Random.shuffle(foods);

        return random_food;
    }
}

module.exports = MenuRecommend;