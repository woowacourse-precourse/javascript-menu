const { Random } = require("@woowacourse/mission-utils");

const CategoryGenerator = {
    generate() {
        return Random.pickNumberInRange(1,5);
    }
};

module.exports = CategoryGenerator;