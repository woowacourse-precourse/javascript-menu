const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputView = {
    printOpening() {
        Console.print('점심 메뉴 추천을 시작합니다.');
    },

    printResult(result) {
        Console.print('\n메뉴 추천 결과입니다.');
        result.forEach(element => {
            Console.print(`[ ${element.join(' | ')} ]`);
        });
        this.printEnd();
    },

    printEnd() {
        Console.print('\n추천을 완료했습니다.');
        Console.close();
    }
};

module.exports = OutputView;