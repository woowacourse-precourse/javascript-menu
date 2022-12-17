const MU = require("@woowacourse/mission-utils");
const ErrorHandler = require('./ErrorHandler');
const OutputView = require('./OutputView');

const InputView = {
    /**
     * 코치 이름을 입력 받는다
     */
    readCoachName() {
        MU.Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', (nameString) => {
            try {
                const COACH = nameString.split(',');
                ErrorHandler.coachNameError(COACH);
                this.coachsHate(COACH);
            } catch(e) {
                OutputView.printError(e);
                this.readCoachName();
            }
        });
    },

    coachsHate(COACH) {
        let hateMenu = [];
        for(let i = 0; i < COACH.length; i++) {
           hateMenu[i] = this.readHateMenu(COACH[i]);
        }
        return hateMenu;
    },
    /**
     * 싫어하는 음식을 입력받는다
     */
    readHateMenu(name) {
        MU.Console.readLine(`${name} (이)가 못 먹는 메뉴를 입력해 주세요.\n`,(menu) => {
            try {
                const HATE_MENU = menu.split(',');
            } catch(e) {

            }
        });

    },
};
module.exports = InputView;