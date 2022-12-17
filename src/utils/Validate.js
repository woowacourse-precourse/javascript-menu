const { ERROR_MESSAGE } = require("../utils/constants");
const { Console } = require("@woowacourse/mission-utils");

const InputValidation = {

    isValidName(nameArr) {
        try {
            this.isValidNum(nameArr); //총 인원 유효성 검사
            this.checkDuplicate(nameArr);
            nameArr.forEach(name => {
                this.isValidLength(name);
            });
        } catch (err) {
            Console.print(err.message);
            return true;
        }
        //console.log(nameArr);
        this.isValidNum(nameArr); //총 인원 유효성 검사
        this.checkDuplicate(nameArr);
        nameArr.forEach(name => {
            this.isValidLength(name);
        });
    },

    isValidNum(nameArr) {
        if(nameArr.length < 2 || nameArr.length > 5) throw new Error(ERROR_MESSAGE.NAME_NUM_LIMIT);
    },

    isValidLength(name){
        if(name.length < 2 || name.length > 4) throw new Error(ERROR_MESSAGE.NAME_LEN_LIMIT);
    },

    isValidMenu(menuArr) {
       this.checkDuplicate(menuArr);
    },

    checkDuplicate(arr) {
        const newSet = new Set(arr); //배열을 집합으로 변환
        const IS_DUPLICATE = newSet.size < arr.length; //배열의 원소 중복 여부    
        if (IS_DUPLICATE) throw new Error(ERROR_MESSAGE.DUPLICATE);
        return;
    }

}

module.exports = InputValidation;