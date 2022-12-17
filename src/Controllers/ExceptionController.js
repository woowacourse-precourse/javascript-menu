const OutputView = require("../Views/OutputView");

const ExceptionController = {
    checkCoaches(coaches) {
        if(!this.checkNumber(coaches)) return false;
        if(!this.checkRange(coaches)) return false;
        if(!this.checkBlank(coaches)) return false;
        return true;
    },

    checkNumber(coaches) {
        try {
            if(coaches.split(',').length < 2 || coaches.split(',').length > 5) throw '[ERROR] 코치 수는 최소 2명, 최대 5명 입니다.';
        } catch(e) {
            OutputView.printException(e);
            return false;
        }
        return true;
    },

    checkRange(coaches) {
        try {
            coaches.split(',').forEach(coach => {
                if(coach.length < 2 || coach.length > 4) throw '[ERROR] 코치 이름의 길이는 최소 2글자, 최대 4글자 입니다.';
            });
        } catch(e) {
            OutputView.printException(e);
            return false;
        }
        return true;
    },

    checkBlank(coaches) {
        try {
            coaches.split(',').forEach(coach => {
                if(coach.split('').includes(' ')) throw '[ERROR] 코치 이름에 공백이 있으면 안됩니다.';
            });
        } catch(e) {
            OutputView.printException(e);
            return false;
        }
        return true;
    },
};

module.exports = ExceptionController;