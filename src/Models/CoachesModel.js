class CoachesModel {
    #coaches = [];
    #reluctantFoods = {};
    
    constructor(roster) {
        this.#coaches = this.splitRoster(roster);
    }

    splitRoster(roster) {
        return roster.split(',');
    }

    getCoaches() {
        const coaches = this.#coaches;
        return coaches;
    }

    saveReluctantFood(coach, splitFoods) {
        this.#reluctantFoods = { ...this.#reluctantFoods, [coach]: splitFoods };
    }

    checkReluctant(coach, menu) {
        const checkFoods = this.#reluctantFoods[coach];
        if(checkFoods.includes(menu)) return false;
        this.#reluctantFoods = { ...this.#reluctantFoods, [coach]: [...this.#reluctantFoods[coach], menu] };
        return true;
    }
}
  
module.exports = CoachesModel;