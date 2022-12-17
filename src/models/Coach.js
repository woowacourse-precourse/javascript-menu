class Coach {
  #name;
  #hateFoods = [];
  #categories = [];
  #menus = []; // 요일별 추천 메뉴[] 인덱스: 0~4(월~금) 데이터: 메뉴이름

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getHateFoods() {
    return Object.freeze(this.#hateFoods);
  }

  getCategories() {
    return Object.freeze(this.#categories);
  }

  setHateFoods(foods) {
    this.#hateFoods = foods;
  }

  isValidCategory(categoryInput) {
    let count = 0;
    this.#categories.forEach((category) => {
      if (category === categoryInput) count += 1;
    });
    if (count >= 2) return false;
    return true;
  }

  addCategory(category) {
    this.#categories.push(category);
  }
}

module.exports = Coach;
