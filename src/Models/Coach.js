class Coach {
    #foodList = [];
    #coachList;

    constructor(coachList) {
        this.#coachList = coachList;
    }

    getCoachList() {
        return this.#coachList;
    }

    addFoodList(foodInput) {
        this.#foodList.push(foodInput);
    }

    getFoodList() {
        return this.#foodList;
    }
}

module.exports = Coach;