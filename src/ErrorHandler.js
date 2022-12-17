const ErrorHandler = {
    /**
     * 
     * @param {String[]} coach :  코치이름 배열 
     */
    coachNameError(coach) {
        if(coach.length < 2 || coach > 5) throw new Error('[ERROR] 코치는 최소 2명 최대 5명까지 입력 가능합니다.');
        for(let i = 0; i < coach.length; i++){
            if(coach[i].length < 2 || 4 < coach[i].length)
                throw new Error('[ERROR] 코치 이름은 최소 2글자 최대 4글자여야 합니다.');
        }
        console.log('coachNameError 무사통과^-^');
    },

};
module.exports = ErrorHandler;