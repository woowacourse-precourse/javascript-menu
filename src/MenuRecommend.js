const {Random} = require("@woowacourse/mission-utils")
const MakeRandomCategory = require("./MakeRandomCategory")

class MenuRecommend {
    #category
    #categoryCnt

    constructor() {
        this.#category = {
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
        }

        this.#categoryCnt = {
            '일식': 0,
            '한식': 0,
            '중식': 0,
            '아시안': 0,
            '양식': 0,
        }

    }

    getCategory(day) {
        return this.#category[day]
    }
    
    getCategoryArray() {
        const categoryArray = []
        for (let key in this.#category) {
            categoryArray.push(this.#category[key])
        }
        return categoryArray
    }

    setCategory(day) {
        const categoryName = MakeRandomCategory.createCategory(MakeRandomCategory.generateRandomNum())
        if (this.#categoryCnt[categoryName] < 2) {
            this.#category[day] += categoryName
            this.#categoryCnt[categoryName] += 1
        } else {
            this.setCategory(day)
        }
    }


}

module.exports = MenuRecommend