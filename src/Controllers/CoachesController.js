const CoachesModel = require("../Models/CoachesModel");

class CoachesController extends CoachesModel {
    saveReluctant(coach, foods) {
        const splitFoods = this.splitFoods(foods);
        this.saveReluctantFood(coach, splitFoods);
    }

    splitFoods(foods) {
        return foods.split(',');
    }
}
  
module.exports = CoachesController;