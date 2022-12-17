class Coach {
  #coaches;

  constructor(names) {
    this.validate(names);
  }

  getCoaches() {
    return this.#coaches;
  }

  validate(names) {
    const coaches = names.split(", ");

    this.isValidPersonnel(coaches);
    this.isValidNameLength(coaches);

    this.#coaches = coaches;
  }
  isValidPersonnel(coaches) {
    if (!(coaches.length >= 2 && coaches.length <= 5)) {
      throw new Error("[ERROR] 코치 인원은 최소 2명, 최대 5명이어야 합니다");
    }
  }
  isValidNameLength(coaches) {
    coaches.forEach((name) => {
      if (!(name.length >= 2 && name.length <= 4)) {
        throw new Error(
          "[ERROR] 코치 이름은 최소 2글자, 최대 4글자이어야 합니다"
        );
      }
    });
  }
}

module.exports = Coach;
