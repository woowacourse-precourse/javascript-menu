class Menu {
  #recommendedCategoryList;

  constructor() {
    this.#recommendedCategoryList = [];
  }

  checkDuplicatedCategory(category, count) {
    let checkedCount = 0;
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

  checkCategoryListDone(){
    if(this.#recommendedCategoryList.length === 5){
      return true;
    }
    return false;
  }

  inputRecommendCategory(category) {

    this.#recommendedCategoryList.push(category);
  }

  getRecommendCategoryList(){
    return this.#recommendedCategoryList;
  }

}

module.exports = Menu;
