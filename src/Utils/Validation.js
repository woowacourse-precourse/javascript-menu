const Validation = {
  checkCoaches(coachesName) {
    const coaches = coachesName.split(',');
    this.checkCoachesName(coaches);
    this.checkCoachesCount(coaches);
  },
  
  checkCoachesName(coaches) {
    coaches.forEach((coachName) => {
      if (!(coachName.length >= 2 && coachName.length <= 4)) {
        throw new Error('[ERROR] 코치이름은 2글자에서 4글자여야 합니다.');
      }
    });
  },

  checkCoachesCount(coaches) {
    if (!(coaches.length >= 2 && coaches.length <= 5)) {
      throw new Error('[ERROR] 2명에서 5명까지만 식사가 가능합니다.');
    }
  },

  checkNotEatMenu(notEatMenu) {
    const notEatMenuArr = notEatMenu.split(',');
    if (notEatMenuArr.length > 2) {
      throw new Error('[ERROR] 못먹는 음식이 두개이상이면 안됩니다.');
    }
  }
};

module.exports = Validation;
