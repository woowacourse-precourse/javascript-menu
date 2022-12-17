const { Random } = require("@woowacourse/mission-utils");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안: "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

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

  shuffleMenu() {
    const RandomJapaneseMenu = Random.shuffle(japaneseMenu)[0];
  },

  separateMenuByCategory() {
    let japaneseMenu = SAMPLE.일식.split(", ");
    let koreanMenu = SAMPLE.한식.split(", ");
    let chineseMenu = SAMPLE.중식.split(", ");
    let asianMenu = SAMPLE.아시안.split(", ");
    let westernMenu = SAMPLE.양식.split(", ");
  },
};

module.exports = RandomGeneration;
