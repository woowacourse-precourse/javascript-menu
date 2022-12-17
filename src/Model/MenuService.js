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
}

module.exports = MenuService;
