class CoachesModel {
    #coaches = [];
    
    constructor(roster) {
        this.#coaches = this.splitRoster(roster);
        // this.saveCoaches(splitRoster);
    }

    splitRoster(roster) {
        return roster.split(',');
    }

    // saveCoaches(splitRoster) {
    //     splitRoster.forEach(coach => {
    //         this.#coaches = { ...this.#coaches, [coach]: [] };
    //     });
    // }

    getCoaches() {
        const coaches = this.#coaches;
        return coaches;
    }
}
  
module.exports = CoachesModel;