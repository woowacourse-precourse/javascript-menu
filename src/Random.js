const { Console, Random } = require("@woowacourse/mission-utils");
const { MATCH, CATEGORY } = require("./Constant");

const Make = {
    makeCategory() {
        const match = new Map([
            [1, "일식"],
            [2, "한식"],
            [3, "중식"],
            [4, "아시안"],
            [5, "양식"],
        ])
        return match.get(Random.pickNumberInRange(1, 5))
    },

    makeMenu(category) {
        let foodList = CATEGORY.get(category)
        foodList = foodList.split(", ")
        foodList = MissionUtils.Random.shuffle(foodList)
        return foodList[0]
    }
}

module.exports = Make;