const MissionUtils = require("@woowacourse/mission-utils");
const { Console} = MissionUtils;

const {ERROR} = require("./Constants.js");

const InputView = {
    // inputName(callback) {
    //   Console.readLine(`코치의 이름을 입력해 주세요. (, 로 구분)\n`, callback);
    // },

    // inputName(name, callback) {
    //     Console.readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, callback);
    // },

    validateName(name){
        if (name.length < 2 || name.length > 4){
            this.errorHandling(ERROR.NAME_SIZE_ERROR);
            return false;
        }

        return true;
    },

    validateNames(names){
        const nameSplit = names.split(',');
        if (nameSplit.length < 2 || nameSplit.length > 5){
            this.errorHandling(ERROR.MAN_NUMBER_ERROR);
            return false;
        }
        
        for(let name of nameSplit){
            if(!this.validateName(name)) return false;
        }

        return true;
    },

    validateMenu(menus){
        const menuSplit = menus.split(',');
        if (menuSplit.length < 0 || menuSplit.length > 2){
            this.errorHandling(ERROR.MENU_NUMBER_ERROR);
            return false;
        }

        return true;
    },

    errorHandling(message){
        try{
          throw new Error(message);
        }catch(error){
          Console.print(error);
        }
    }
  };
  
  module.exports = InputView;