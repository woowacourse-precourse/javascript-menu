class CoachesModel {
    #coaches = {}
    
    constructor(roster) {
        const splitRoster = this.splitRoster(roster);
        this.saveCoaches(splitRoster);
    }

    splitRoster(roster) {
        return roster.split(',');
    }

    saveCoaches(splitRoster) {
        splitRoster.forEach(coach => {
            this.#coaches = { ...this.#coaches, [coach]: [] };
        });
    }
}
  
module.exports = CoachesModel;