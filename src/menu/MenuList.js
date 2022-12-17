const { Random } = require("@woowacourse/mission-utils");

class MenuList {
  #categories = ["일식", "한식", "중식", "아시안", "양식"];
  #menus = {
    일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
    한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
    중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
    아시안:
      "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
    양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
  };
  #categoryRandomGenerator = Random;

  getCategory() {
    let randomNumber = this.#categoryRandomGenerator.pickNumberInRange(0, 4);
    randomNumber += 1;
    return this.#categories[randomNumber];
  }
  getMenu(category) {
    const targetMenus = this.#menus[category].split(", ");

    const shuffled = Random.shuffle(targetMenus);
    return shuffled[0];
  }
}

module.exports = MenuList;
