const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
    readCoachsName(callback) {
        MissionUtils.Console.readLine('코치의 이름을 입력해주세요. (,로 구분)\n', (answer) => {
            callback(answer);
        });
    }
}

module.exports = InputView;