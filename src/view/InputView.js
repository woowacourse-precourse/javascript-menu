const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
    readCoachsName(callback) {
        MissionUtils.Console.readLine('코치의 이름을 입력해주세요. (,로 구분)\n', (answer) => {
            const coachNameList = answer.split(',');
            try {
                this.invaildate_coachNameList(coachNameList);
            } catch(e) {
                MissionUtils.Console.print(e);
                this.readCoachsName(callback);
                return;
            }
            callback(coachNameList);
        });
    },
    invaildate_coachNameList(list) {
        if(list.length < 2 || list.length > 5) {
            throw "[ERROR] 코치는 최소 2명, 최대 5명까지 식사를 함께합니다.";
        }
        list.arrayforEach(name => {
            this.invaildate_coachName(name)
        });
    },
    invaildate_coachName(name) {
        if(name.length < 2 || name.length > 4) {
            throw "[ERROR] 코치의 이름은 최소 2글자 최대 4글자입니다.";
        }
    }
}

module.exports = InputView;