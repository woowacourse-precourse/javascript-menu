class CoachDiet {
  #name;
  #impossibles;

  constructor(name) {
    this.#name = name;
    this.#impossibles = [];
  }

  // setName(name) {}
  getName() {
    return this.#name;
  }

  setImpossibles(impossibles) {
    if (impossibles === '') return;
    const impossibleList = impossibles.split(',');
    this.#impossibles = impossibleList;
  }

  getImpossibles() {
    return this.#impossibles;
  }
}

module.exports = CoachDiet;
