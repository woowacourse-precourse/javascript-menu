const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
    printStart() {
        MissionUtils.Console.print('점심 메뉴 추천을 시작합니다.');
    },
    
    printEnding() {
        PrintRecommandResult();
    },
    printRecommandResult() {
        MissionUtils.Console.print('메뉴 추천 결과입니다.');
        printClass();
    },
    printClass() {
        MissionUtils.Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    }
};
module.exports = OutputView;