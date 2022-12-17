class MenuMachine {
  #menu;
  #allergies;

  constructor(coachName, menu) {
    this.#allergies = new Map();
    for (const name of coachName) {
      this.#allergies.set(name, []);
    }
    this.menu = menu;
  }

  setAllergies(coachName, allergies) {
    console.log(coachName, 'ㅁㄹㅇ');
    for (const allergy of allergies) {
      this.#allergies.get(coachName).push(allergy);
    }
  }
}
module.exports = MenuMachine;
