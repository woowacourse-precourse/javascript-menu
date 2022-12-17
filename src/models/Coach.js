class Coach {
  #name;

  constructor(name) {
    // console.log(`${name} 코치 생성!`);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}
module.exports = { Coach };
