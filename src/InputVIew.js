const WoowaCourse = require("@woowacourse/mission-utils");
const ErrorHandler = require("./ErrorHandler");
const OutputView = require("./OutputView");
const Menu = require("./Menu");
const InputView = {
  readCoachName() {
    WoowaCourse.Console.readLine(
      "\n코치의 이름을 입력해 주세요. (, 로 구분)\n",
      (nameString) => {
        try {
          const COACH = nameString.split(",");
          ErrorHandler.coachNameError(COACH);
          this.readHateMenu(COACH, [], 0);
        } catch (e) {
          OutputView.printError(e);
          this.readCoachName();
        }
      }
    );
  },
  readHateMenu(COACH, hateMenu, i) {
    WoowaCourse.Console.readLine(
      `\n${COACH[i]} (이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      (menu) => {
        try {
          hateMenu[i] = menu.split(",");
          ErrorHandler.hateMenuError(hateMenu[i]);
          i == COACH.length - 1
            ? Menu.pickMenu(COACH, Menu.pickCategory(), hateMenu)
            : this.readHateMenu(COACH, hateMenu, ++i);
        } catch (e) {
          OutputView.printError(e);
          this.readHateMenu(COACH, hateMenu, i);
        }
      }
    );
  },
};
module.exports = InputView;
