const ExceptionController = require('./ExceptionController');

class MenuController {
    constructor({inputView, outputView}) {
        this.inputView = inputView;
        this.outputView = outputView;
        this.startMenuProgram();
    }

    startMenuProgram() {
        this.outputView.printStart();
        this.requestCoach();
    }

    requestCoach() {
        this.inputView.readCoach(this.makeCoachList.bind(this));
    }

    makeCoachList(coachList) {
        if(!ExceptionController.isValidCoach(this.processCoachList(coachList))) {
            // 비정상 로직
            this.requestCoach();
        } 
        // 정상 로직
        // -> 코치 리스트를 저장하고 각각의 코치 리스트에 대해서 못먹는 메뉴 입력받기
    }

    processCoachList(coachList) {
        const newList = coachList.split(',');
        return newList.map((coach) => coach.trim());
    }
}

module.exports = MenuController;