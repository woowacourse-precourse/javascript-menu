class Menu {
  #recommendedCategoryList;

  constructor() {
    this.#recommendedCategoryList = [];
  }

  checkDuplicatedCategory(category, count) {
    const checkedCount = 0;
    this.#recommendedCategoryList.forEach((recommendedCategory) => {
      if (recommendedCategory === category) {
        checkedCount += 1;
      }
    });
    if(checkedCount >= count){
      return false;
    }
    return true;
  }

  inputRecommendCategory(category) {
    this.#recommendedCategoryList.push(category);
  }

  

}

module.exports = Menu;
