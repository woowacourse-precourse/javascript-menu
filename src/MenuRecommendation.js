const Coach = require("./Coach");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { checkCoachNumber } = require("./validation");
const MissionUtils = require("@woowacourse/mission-utils");

const categories = {
  get(number) {
    if (number === 1) return "일식";
    if (number === 2) return "한식";
    if (number === 3) return "중식";
    if (number === 4) return "아시안";
    if (number === 5) return "양식";
  },
};

const menus = {
  일식: [
    "규동",
    "우동",
    "미소시루",
    "스시",
    "가츠동",
    "오니기리",
    "하이라이스",
    "라멘",
    "오코노미야끼",
  ],
  한식: [
    "김밥",
    "김치찌개",
    "쌈밥",
    "된장찌개",
    "비빔밥",
    "칼국수",
    "불고기",
    "떡볶이",
    "제육볶음",
  ],
  중식: [
    "깐풍기",
    "볶음면",
    "동파육",
    "짜장면",
    "짬뽕",
    "마파두부",
    "탕수육",
    "토마토",
    "달걀볶음",
    "고추잡채",
  ],
  아시안: [
    "팟타이",
    "카오 팟",
    "나시고렝",
    "파인애플 볶음밥",
    "쌀국수",
    "똠얌꿍",
    "반미",
    "월남쌈",
    "분짜",
  ],
  양식: [
    "라자냐",
    "그라탱",
    "뇨끼",
    "끼슈",
    "프렌치 토스트",
    "바게트",
    "스파게티",
    "피자",
    "파니니",
  ],
};

const catList = [];

const category = [];

class MenuRecommendation {
  constructor() {
    this.coachs = [];
    this.count = 0;
  }

  receiveCat() {
    OutputView.printCat(category);
  }

  receiveResult() {
    OutputView.printEndText();
    this.receiveCat();

    OutputView.printCoachLunch(this.coachs);

    // for (let i = 0; i < this.coachs.length; i++) {
    //   console.log(
    //     `[ ${this.coachs[i].getName()} | ${this.coachs[i]
    //       .getLunch()
    //       .join(" | ")}]`
    //   );
    // }

    OutputView.printExit();
  }

  chooseMenuForCoach(coach) {
    for (let i = 0; i < 5; i++) {
      let todayCat = category[i];

      let numArr = [];
      for (let j = 0; j < menus[todayCat].length; j++) {
        numArr.push(j);
      }

      const menu = MissionUtils.Random.shuffle(numArr)[0];

      this.coachs[Number(coach)].setLunch(menus[todayCat][menu]);

      // console.log(menus[todayCat][menu]);
    }
  }

  chooseMenu() {
    for (let i = 0; i < this.coachs.length; i++) {
      this.chooseMenuForCoach(i);
      console.log(this.coachs[i].getLunch());
      console.log(new Set(this.coachs[i].getLunch()).size);
      console.log(this.coachs[i].getLunch().length);
      if (
        !new Set(this.coachs[i].getLunch()).size ===
        this.coachs[i].getLunch().length
      ) {
        i--;
      }
    }

    console.log(this.coachs);
    this.receiveResult();
  }

  chooseCat() {
    while (category.length < 5) {
      let randomNum = MissionUtils.Random.pickNumberInRange(1, 5);
      let random = categories.get(randomNum);

      if (category.includes(random)) {
        if (new Set(random).size + 1 === category.length) {
          category.push(random);
          // catList.push(randomNum);
        }
      } else if (!category.includes(random)) {
        category.push(random);
        // scatList.push(randomNum);
      }
    }
    // console.log(catList);
    this.chooseMenu();
  }

  receiveDislikeMenu(menus) {
    menus.split(",").forEach((menu) => {
      this.coachs[this.count].setDislikeMenu(menu);
    });
    this.count++;

    if (this.count === this.coachs.length) {
      // console.log(this.coachs);
      this.chooseCat();
    } else {
      InputView.readDislikeMenu(
        this.receiveDislikeMenu.bind(this),
        this.coachs,
        this.count
      );
    }
  }

  receiveCoachName(names) {
    names.split(",").forEach((name) => {
      this.coachs.push(new Coach(name));
    });

    if (checkCoachNumber(this.coachs.length)) {
      return InputView.readCoachName(this.receiveCoachName.bind(this));
    }

    console.log(this.coachs);
    InputView.readDislikeMenu(this.receiveDislikeMenu.bind(this), 0);
  }

  start() {
    OutputView.printStartText();

    InputView.readCoachName(this.receiveCoachName.bind(this));
  }
}

module.exports = MenuRecommendation;
