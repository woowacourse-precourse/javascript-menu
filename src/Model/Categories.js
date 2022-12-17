class Categories {
  #categories = ['일식', '한식', '중식', '아시안', '양식'];

  get(index) {
    return this.#categories[index - 1];
  }
}

module.exports = Categories;
