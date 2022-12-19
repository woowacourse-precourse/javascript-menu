const { Random } = require("@woowacourse/mission-utils");

const MenuGenerator = {
    generate(menu) {
        return Random.shuffle(menu)[0];
    }
};

module.exports = MenuGenerator;