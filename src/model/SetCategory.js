const { Random } = require('@woowacourse/mission-utils');

class setCategory {
  #category = {
    1: '일식',
    2: '한식',
    3: '중식',
    4: '아시안',
    5: '양식',
  };
  #counts = [0, 0, 0, 0, 0];
  #list = [];

  makeCategoryList() {
    while (this.#list.length !== 5) {
      this.categoryOfWeak();
    }
    return this.NumberToName();
  }

  categoryOfWeak() {
    const categoryNumber = this.randomGenerator();
    if (this.#list.includes(categoryNumber)) this.#counts[categoryNumber - 1] += 1;
    if (this.isAddToResults(categoryNumber)) this.#list.push(categoryNumber);
    else this.categoryOfWeak();
  }

  isAddToResults(categoryNumber) {
    let booleanResult = false;
    this.#counts.forEach((number, index) => {
      if (number === 2 && categoryNumber - 1 === index) booleanResult = false;
      else booleanResult = true;
    });
    return booleanResult;
  }

  NumberToName() {
    const results = [];
    for (let i = 0; i < this.#list.length; i++) {
      results.push(this.#category[this.#list[i]]);
    }
    return results;
  }

  randomGenerator() {
    return Random.pickNumberInRange(1, 5);
  }
}

module.exports = setCategory;
