const Coach = require("./Coach");

class MenuService {
  #status;
  #names;
  #coaches;
  #categoryOfWeek;

  constructor(status) {
    this.#status = status;
    this.#names = [];
    this.#coaches = [];
    this.#categoryOfWeek = [];
  }

  getStatus() {
    return this.#status;
  }

  getNames() {
    return this.#names;
  }

  getCoaches() {
    return this.#coaches;
  }

  getCategoryOfWeek() {
    return this.#categoryOfWeek;
  }

  setStatus(newStatus) {
    this.#status = newStatus;
  }

  setNames(newNames) {
    this.validateNames(newNames);
    this.#names = newNames;
  }

  validateNames(names) {
    if (names.length < 2 || names.length > 5)
      throw new Error("[ERROR] 코치는 2~5명을 입력해야 합니다.");

    names.forEach((name) => {
      if (name.length < 2 || name.length > 4)
        throw new Error("[ERROR] 코치의 이름은 2~4글자여야 합니다.");
    });
  }

  passName() {
    this.#names.shift();
  }
}

module.exports = MenuService;
