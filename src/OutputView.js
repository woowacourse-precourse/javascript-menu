const MU = require("@woowacourse/mission-utils");
const OutputView = {
    /**
     * 전체 결과 출력
     */
    printMenu() {

    },
    /**
     * 시작 문장 출력
     */
    printStart() {
        MU.Console.print('점심 메뉴 추천을 시작합니다.\n');
    },
    /**
     * 마지막 문장 출력
     */
    printEnd() {
        MU.Console.print('추천을 완료했습니다.');
    },
    printError(e) {
        MU.Console.print(e);
    }
};

module.exports = OutputView;