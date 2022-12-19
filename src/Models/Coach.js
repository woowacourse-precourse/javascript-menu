class Coach {
    #coaches;
    #foodList = {};

    addFoodList(coach, foodInput) {
        this.#foodList[`${coach}`] = foodInput;
    }

    isSameCoachesCount(index) {
        if(index === this.#coaches.length) return true;
        return false;
    }

    getCoachName(index) {
        return this.#coaches[index];
    }

    setCoaches(coach) {
        this.#coaches = coach;
    }

    getFoodList() {
        return this.#foodList;
    }
}

module.exports = Coach;