class MenuService {
  #status;
  #coaches;
  #categoryOfWeek;

  constructor(status) {
    this.#status = status;
    this.#coaches = [];
    this.#categoryOfWeek = [];
  }

  getStatus() {
    return this.#status;
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
