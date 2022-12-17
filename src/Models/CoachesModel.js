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
}
  
module.exports = CoachesModel;