const MissionUtils = require('@woowacourse/mission-utils');

const InputView = {
  readCoaches(setCoaches) {
    MissionUtils.Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)', (answer) => {
      setCoaches(answer);
    });
  },
};

module.exports = InputView;
