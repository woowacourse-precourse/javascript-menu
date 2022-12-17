const MenuModel = require("../Models/MenuModel");
const RandomUtil = require("../Utils/RandomUtil");
const OutputView = require("../Views/OutputView");

let coachesController;

class MenuController extends MenuModel {
    createRecommendMenu(coaches, setCoachesController) {
        coachesController = setCoachesController;
        this.setCoaches(coaches);

        for(let i = 0; i < 5; i++) {
            const category = this.setCategory();
            this.setMenu(coaches, category);
        }
        this.setResult();
    }

    setCategory() {
        const categoryNumber = RandomUtil.randomCategory();
        const category = this.searchCategory(categoryNumber);
        if(this.checkCategory(category)) return category;
        this.setCategory();
    }

    searchCategory(number) {
        let category;
        switch(number) {
            case 1: 
                category = '일식';
                break;
            case 2: 
                category = '한식';
                break;
            case 3: 
                category = '중식';
                break;
            case 4: 
                category = '아시안';
                break;
            case 5: category = '양식';
        }
        return category;
    }

    setMenu(coaches, category) {
        for(let i = 0; i < coaches.length; i++) {
            const categoryMenu = this.getMenu(category);
            const menu = RandomUtil.randomMenu(categoryMenu);
            if(!coachesController.checkReluctant(coaches[i], menu)){ 
                i -= 1;
                continue;
            }
            this.addMenu(i, menu);
        }
    }

    setResult() {
        const result = this.getRecommend();
        OutputView.printResult(result);
    }
}
  
module.exports = MenuController;