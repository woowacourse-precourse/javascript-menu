const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("../Constants");

const OutputView = {
    printStart() {
        MissionUtils.Console.print('점심 메뉴 추천을 시작합니다.');
    },
    
    printEnding() {
        MissionUtils.Console.print('메뉴 추천 결과입니다.');
        PrintRecommandResult();
        MissionUtils.Console.print('추천을 완료했습니다.');
    },
    printRecommandResult(categorys, coachs) {
        MissionUtils.Console.print(this.classToString());
        MissionUtils.Console.print(this.categorysToString(categorys));
        coachs.array.forEach(coach => {
            MissionUtils.Console.print(coach.toString());
        });
    },
    classToString() {
        const content = ['구분', ...constants.CLASS];
        return '[ ' + content.join(' | ') + ' ]';
    },
    categorysToString(categorys) {
        const content = ['카테고리', ...categorys];
        return '[ ' + content.join(' | ') + ' ]';
    },
};
module.exports = OutputView;