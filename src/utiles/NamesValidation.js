const { COACH } = require('../constants/Constants');
const NameLengthError = require('../error/NamesError/NameLengthError');
const PersonCountError = require('../error/NamesError/PersonCountError');

const NamesValidation = class {
  #names;

  check(names) {
    this.#names = names;

    this.#nameLengthCheck();
    this.#personCountCheck();
  }

  #nameLengthCheck() {
    this.#names.forEach((name) => {
      if (name.length < COACH.minNameSize || name.length > COACH.maxNameSize)
        throw new NameLengthError();
    });
  }

  #personCountCheck() {
    const personCount = this.#names.length;

    if (personCount < COACH.minPerson || personCount > COACH.maxPerson)
      throw new PersonCountError();
  }
};

module.exports = NamesValidation;
