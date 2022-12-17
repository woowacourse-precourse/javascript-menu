class Coach {
  #coaches;

  constructor(names) {
    this.validate(names);
  }

  validate(names) {
    const coaches = names.split(",");

    if (!(coaches.length >= 2 && coaches.length <= 5)) {
      throw new Error("[ERROR] 코치 인원은 최소 2명, 최대 5명이어야 합니다");
    }
  }
}

module.exports = Coach;
