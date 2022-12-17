class CoachList {
  #coachs;

  constructor(coachs) {
    this.#coachs = coachs;
  }

  getCoach(name) {
    for (coach of this.#coachs) {
      if (coach.getName() === name) return coach;
    }
    return false;
  }

  addVannedMenu(name, vannedMenu) {}
}
