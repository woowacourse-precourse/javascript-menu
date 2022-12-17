const ExceptionController = require('./ExceptionController');
const { menu , key } = require('../const/menu');
const { Random } = require("@woowacourse/mission-utils");

class MenuController {
    #checkedCoach = [];
    #coachList;
    #foodList = {};

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
        this.inputView.readCoach(this.handleCoachList.bind(this));
    }

    handleCoachList(coachList) {
        const processedCoachList = this.processList(coachList);
        if(!ExceptionController.isValidCoach(processedCoachList)) {
            // 비정상 로직
            this.requestCoach();
        } 
        // 정상 로직
        this.#coachList = processedCoachList;
        this.requestNoEatFood();
    }

    processList(input) {
        const newList = input.split(',');
        return newList.map((item) => item.trim());
    }

    requestNoEatFood() {
        this.#coachList.forEach((coach) => {
            if(!this.#checkedCoach.includes(coach)){
                this.inputView.readNoEatFood(this.handleFoodList.bind(this), coach);
            }
        })
    }

    handleFoodList(foodList, coach) {
        const processedFoodList = this.processList(foodList);
        if(!ExceptionController.isValidFoodInput(processedFoodList)) {
            // 비정상 로직
            this.requestNoEatFood();
        } 
        // 정상 로직
        this.#foodList[`${coach}`] = processedFoodList;
        this.#checkedCoach.push(coach);
        this.requestNoEatFood();
        this.menuRecommand();
    }

    menuRecommand() {
        const result = menu[key[Random.pickNumberInRange(1, 5)]];
    }
}

module.exports = MenuController;