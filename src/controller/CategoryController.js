const CategoryModel = require("../model/CategoryModel");
const CoachNameInputValidation = require("../validation/CoachNameInputValidation");

class CategoryController {
  #mainController;
  #categoryModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#categoryModel = new CategoryModel();
  }

  processCoachNameInput(coachNameInput) {
    try {
      CoachNameInputValidation.validate(coachNameInput);
      this.#categoryModel.setCoachNames(coachNameInput.split(","));
      this.#categoryModel.generateCategories();
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
      this.#mainController.readCoachNameInput();
    }
  }

  getCoachNames() {
    return this.#categoryModel.getCoachNames();
  }

  getCategories() {
    return this.#categoryModel.getCategories();
  }
}

module.exports = CategoryController;
