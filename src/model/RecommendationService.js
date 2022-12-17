class RecommendationService {
  #coaches = [];
  #menu = [];

  setCoaches(coaches) {
    this.#coaches = coaches;
    this.setMenuLength(coaches.length);
  }

  setMenuLength(size) {
    this.#menu = Array.from({ length: size });
  }

  setMenuForEachCoah(menus, index) {
    this.#menu[index] = menus;
  }
}

module.exports = RecommendationService;
