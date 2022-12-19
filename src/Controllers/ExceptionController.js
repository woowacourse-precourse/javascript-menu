const outputView = require('../Views/OutputView');

const ExceptionController = {
    isInvalidCoach(coachList) {
        try {
            if(this.isInvalidCoachCount(coachList)) throw '[ERROR] 코치는 2-5명 범위로 입력이 가능힙니다.'
            if(this.isInvalidCoachName(coachList)) throw '[ERROR] 코치의 이름은 2-4글자 사이로 입력이 가능합니다.';
        } catch(e) {
            outputView.printException(e);
            return true;
        }
        return false;
    },

    isInvalidCoachCount(coachList) {
        if(coachList.length < 2 || coachList.length > 5) return true;
    },

    isInvalidCoachName(coachList) {
        let isInvalid = false;
        coachList.forEach((coach) => {
            if(coach.length < 2 || coach.length > 4) isInvalid = true;
        })
        return isInvalid;
    },

    isInvalidFoodInput(foodList) {
        try {
            if(foodList.length < 0 || foodList.length > 3) throw '[ERROR] 못 먹는 음식은 0-2개 사이로 입력이 가능합니다.';
        } catch(e) {
            outputView.printException(e);
            return true;
        }
        return false;
    }
}

module.exports = ExceptionController;
