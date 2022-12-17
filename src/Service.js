const Coach = require("./Coach");


class Service {
  #coaches = [];

  constructor(coachNames) {
    coachNames.map((coachName) => {
			const coach = new Coach(coachName);
      if(this.#coaches.includes(coach)) {
        throw new Error("error");
      }

      this.#coaches.push(coach);
		})
  }

  getCoaches() {
    return this.#coaches
  }

  
}

module.exports = Service;