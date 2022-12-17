class RecommendationService {
  #coaches = [];

  setCoaches(coaches) {
    this.#coaches = coaches;
  }
}

module.exports = RecommendationService;
