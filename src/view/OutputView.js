const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("../Constants");

const OutputView = {
    printStart() {
        MissionUtils.Console.print('점심 메뉴 추천을 시작합니다.');
    },
    
    printEnding() {
        PrintRecommandResult();
    },
    printRecommandResult(categorys) {
        MissionUtils.Console.print('메뉴 추천 결과입니다.');

        MissionUtils.Console.print(this.classToString());
        MissionUtils.Console.print(this.categorysToString(categorys));
    },
    classToString() {
        const content = ['구분', ...constants.CLASS];
        return '[ ' + content.join(' | ') + ' ]';
    },
    categorysToString(categorys) {
        const content = ['카테코리', ...categorys];
        return '[ ' + content.join(' | ') + ' ]';
    },
};
module.exports = OutputView;