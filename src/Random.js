const { Random } = require("@woowacourse/mission-utils");
const { MATCH, CATEGORY } = require("./Constant");

const Make = {
    makeCategory() {
        return MATCH.get(Random.pickNumberInRange(1, 5))
    },

    makeMenu(category) {
        let foodList = CATEGORY.get(category)
        foodList = foodList.split(", ")
        foodList = Random.shuffle(foodList)
        return foodList[0]
    }
}

module.exports = Make;