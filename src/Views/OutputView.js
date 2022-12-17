const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputView = {
    printOpening() {
        Console.print('점심 메뉴 추천을 시작합니다.');
    }
};

module.exports = OutputView;