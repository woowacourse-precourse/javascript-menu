const ExceptionController = require('./ExceptionController');
const { Random } = require("@woowacourse/mission-utils");
const Coach = require('../Models/Coach');

class MenuController {
    #coachList;
    #coach;

    constructor({inputView, outputView}) {
        this.inputView = inputView;
        this.outputView = outputView;
        this.startMenuProgram();
        this.#coach = new Coach();
    }

    startMenuProgram() {
        this.outputView.printStart();
        this.requestCoach();
    }

    requestCoach() {
        this.inputView.readCoach(this.handleCoachList.bind(this));
    }

    handleCoachList(coachList) {
        const processedCoachList = this.processInputToList(coachList);
        if(ExceptionController.isInvalidCoach(processedCoachList)) {
            this.requestCoach();
        }
        this.#coachList = processedCoachList;
        this.requestNoEatFood(0);
    }

    processInputToList(input) {
        const newList = input.split(',');
        return newList.map((item) => item.trim());
    }

    requestNoEatFood(coachIndex) {
        // 토미, 제임스, 포코
        // 만약 입력을 다 받았다면 메뉴 추천
        if(coachIndex === this.#coachList.length) {
            this.menuRecommand();
            return;
        }
        
        // 코치 순서대로 입력받기
        this.inputView.readNoEatFood(this.#coachList[coachIndex], (foodList) => {
            this.handleFoodList(foodList, coachIndex);
        });
    }

    handleFoodList(foodList, coachIndex) {
        // 계속해서 인덱스를 올려가면서 메뉴 추천 받기
        const processedFoodList = this.processInputToList(foodList);
        if(ExceptionController.isInvalidFoodInput(processedFoodList)) {
            // 비정상 로직
            this.requestNoEatFood(coachIndex);
        } 
        // 정상 로직
        this.#coach.addFoodList(this.#coachList[coachIndex], processedFoodList);
        this.requestNoEatFood(coachIndex+1);
    }

    menuRecommand() {
        
    }
}

module.exports = MenuController;