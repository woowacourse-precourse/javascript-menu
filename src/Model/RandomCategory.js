const { Random } = require("@woowacourse/mission-utils");

const RandomCategory = {
  generator() {
    let randomCategory = [];
    const categoryName = {
      1: "일식",
      2: "한식",
      3: "중식",
      4: "아시안",
      5: "양식",
    };
    let category = Random.pickNumberInRange(1, 5);
    while (randomCategory.length < 6) {
      for (let i = 0; i < 6; i++) {
        randomCategory.push(category)
      }
    }
    return randomCategory;
  },
};

module.exports = RandomCategory;


