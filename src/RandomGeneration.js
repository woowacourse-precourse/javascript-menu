const { Random } = require("@woowacourse/mission-utils");

const RandomGeneration = {
  recommendCategory() {
    let randomCategories = [];
    this.checkcheckDuplicationCategory(randomCategories);
    let category = randomCategories.join(",").replace(/1/g, "일식").replace(/2/g, "한식").replace(/3/g, "중식").replace(/4/g, "아시안").replace(/5/g, "양식").split(",");
    return category;
  },

  checkcheckDuplicationCategory(randomCategories) {
    let checkNum = [0, 0, 0, 0, 0];
    for (let count = 0; count < 5; ) {
      let randomNum = Random.pickNumberInRange(1, 5);
      if (checkNum[randomNum - 1] < 2) {
        randomCategories.push(randomNum);
        count++;
        checkNum[randomNum - 1]++;
      }
    }
  },
};

module.exports = RandomGeneration;
