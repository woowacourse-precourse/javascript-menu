const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const CoachesController = require("../Controllers/CoachesController");
let coachesController;

const InputView = {
    readCoaches() {
        Console.readLine('\n코치의 이름을 입력해 주세요. (, 로 구분)\n', (coaches) => {
            coachesController = new CoachesController(coaches);
        })
    }
};

module.exports = InputView;