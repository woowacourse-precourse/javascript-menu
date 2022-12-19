class Coach {
    #foodList = {};

    addFoodList(coach, foodInput) {
        this.#foodList[`${coach}`] = foodInput;
    }

    getFoodList() {
        return this.#foodList;
    }
}

module.exports = Coach;