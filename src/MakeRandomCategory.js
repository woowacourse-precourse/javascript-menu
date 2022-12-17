const {Random} = require("@woowacourse/mission-utils")

const MakeRandomCategory = {

    generateRandomNum() {
        return Random.pickNumberInRange(1, 5)
    },

    createCategory(randomNum) {
        switch (randomNum) {
            case 1:
                return "일식"
            case 2:
                return "한식"
            case 3:
                return "중식"
            case 4:
                return "아시안"
            case 5:
                return "양식"
        }
    }
}

module.exports = MakeRandomCategory