const outputView = require('../Views/OutputView');

const ExceptionController = {
    isValidCoach(coachList) {
        console.log(coachList);
        try {
            if(this.isInvalidCoachCount(coachList)) throw '[ERROR] 코치는 2-5명 범위로 입력이 가능힙니다.'
            if(this.isInvalidCoachName(coachList)) throw '[ERROR] 코치의 이름은 2-4글자 사이로 입력이 가능합니다.';
        } catch(e) {
            outputView.printException(e);
            return false;
        }
        return true;
    },

    isInvalidCoachCount(coachList) {
        if(coachList.length < 2 || coachList.length > 5) return true;
    },

    isInvalidCoachName(coachList) {
        coachList.forEach((coach, idx) => {
            if(coach.length < 2 || coach.length > 4) return true;
        })
    }
}

module.exports = ExceptionController;
