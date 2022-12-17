const { Console } = require("@woowacourse/mission-utils");
const { catchError } = require("./util");
const { checkCoachNames, checkAvoidMenu } = require("./Validation");

const InputView = {
  readCoachNames(readCoachNamesCallback) {
    Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", (names) => {
      names = catchError(names, checkCoachNames);
      if (!names) return this.readCoachNames(readCoachNamesCallback);
      readCoachNamesCallback(names);
    });
  },

  readAvoidMenu(name, readAvoidMenuCallback) {
    Console.readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (menu) => {
      menu = catchError(menu, checkAvoidMenu)  
      if(!menu) return this.readAvoidMenu(name, readAvoidMenuCallback)
      readAvoidMenuCallback(menu);
      }
    );
  },
};

module.exports = InputView;
