const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const CoachesController = require("../Controllers/CoachesController");
let coachesController;
let menuController;

const InputView = {
    setMenuController(setMenuController) {
        menuController = setMenuController;
    },

    readCoaches() {
        Console.readLine('\n코치의 이름을 입력해 주세요. (, 로 구분)\n', (coaches) => {
            coachesController = new CoachesController(coaches);
            coaches = coachesController.getCoaches();
            this.readReluctantFood(coaches, 0);
        })
    },

    readReluctantFood(coaches, index) {
        Console.readLine(`\n${coaches[index]}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (foods) => {
            coachesController.saveReluctant(coaches[index], foods);
            if(coaches.length - 1 > index) this.readReluctantFood(coaches, index + 1);
        })
    },
};

module.exports = InputView;