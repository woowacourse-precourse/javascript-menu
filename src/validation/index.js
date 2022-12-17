const FoodDB = require("../model/foodDb");
const error = require("../constant/error");

const validation = {
  validateCoachName(name) {
    if (name.length <= 1 || name.length >= 5) {
      throw new Error(error.NAME_RANGE_ERROR);
    }
  },
  validateCoachLength(splitCoaches) {
    if (splitCoaches.length <= 1 || splitCoaches.length >= 6) {
      throw new Error(error.COACH_RANGE_ERROR);
    }
  },
  iseHatesOutOfLength(splitHates) {
    if (splitHates.length >= 3) return true;
    return false;
  },
  isHatesRepated(splitHates) {
    if (splitHates.length === 1) return false;
    if (hates[0] === hates[1]) return true;

    return false;
  },
  isHatesNotIncluded(splitHates) {
    const foodDb = new FoodDB();
    const allMenus = foodDb.getAllMenus();

    let result = false;
    for (let i = 0; i < splitHates.length; i++) {
      result = allMenus.includes(splitHates[i]);
    }

    return !result;
  },
  validateHates(hates) {
    const splitHates = hates.split(",").map((v) => v.trim());
    if (this.iseHatesOutOfLength(splitHates)) {
      throw new Error(error.HATE_RANGE_ERROR);
    }
    if (this.isHatesRepated(splitHates)) {
      throw new Error(error.HATE_REPEATED_ERROR);
    }
    if (this.isHatesNotIncluded(splitHates)) {
      throw new Error(error.HATE_NOT_INCLUDED_ERROR);
    }
  },
};

module.exports = validation;
