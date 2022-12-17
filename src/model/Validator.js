const {
  ISNUMBER,
  ISNUMBERDIVIDED,
  ISNUMBERBIGGER,
  ISSPLIT,
  ISLENGTH,
  ISREPEAT,
  ISRANGE,
  ISARRAYELEMENTNUMBER,
  ISSTARTWITH,
  ISCLUDE,
} = require('../constant/Error');

class Validator {
  constructor(value) {
    this.checkValue = value;
    this.messagesList = [];
  }
  makeMessages(message) {
    this.messagesList.push(message);
    return this;
  }

  getMessages() {
    const errorMessages = this.messagesList.filter((isErrorMessage) => isErrorMessage !== true);
    return errorMessages.forEach((error) => this.#makeError(error)) || this.checkValue;
  }

  #makeError(errorMessage) {
    throw new Error(errorMessage);
  }
}

class StringValidator extends Validator {
  #stringValue;

  constructor(value) {
    super(value);
    this.#stringValue = this.checkValue;
  }

  isNumber() {
    const check = /^\d+$/.test(this.#stringValue);
    const message = check ? true : ISNUMBER;
    return this.makeMessages(message);
  }

  isNumberDivided(checkShare) {
    const check = this.#stringValue % checkShare;
    const message = !check ? true : ISNUMBERDIVIDED(checkShare);
    return this.makeMessages(message);
  }

  isNumberBigger(checkMinimum) {
    const check = Number(this.#stringValue) >= checkMinimum;
    const message = check ? true : ISNUMBERBIGGER(checkMinimum);
    return this.makeMessages(message);
  }

  isSplit(checkSplit) {
    const message = this.#stringValue.split(checkSplit).length !== 1 ? true : ISSPLIT;
    return this.makeMessages(message);
  }

  isNumberInRange(checkStart, checkEnd) {
    const message =
      Number(this.#stringValue) >= checkStart && Number(this.#stringValue) <= checkEnd
        ? true
        : ISRANGE(checkStart, checkEnd);
    return this.makeMessages(message);
  }

  isStartWith(checkStartWith) {
    const message = this.#stringValue.startsWith(checkStartWith)
      ? ISSTARTWITH(checkStartWith)
      : true;
    return this.makeMessages(message);
  }

  isInclude(compareList) {
    const message = compareList.filter((compare) => compare === this.#stringValue).length
      ? ISCLUDE
      : true;
    return this.makeMessages(message);
  }
}

class ArrayValidator extends Validator {
  #arrayValue;

  constructor(value) {
    super(value);
    this.#arrayValue = this.checkValue;
  }

  isArrayElementNumber() {
    const check = this.#arrayValue.map((value) => /^\d+$/.test(value));
    const message = check.every((value) => value) ? true : ISARRAYELEMENTNUMBER;
    return this.makeMessages(message);
  }

  isRepeated() {
    const message = new Set(this.#arrayValue).size === this.#arrayValue.length ? true : ISREPEAT;
    return this.makeMessages(message);
  }

  isArrayElementInRange(minimum, maximum) {
    const message =
      this.#arrayValue.filter((string) => string.length >= minimum && string.length <= maximum)
        .length === this.#arrayValue.length
        ? true
        : ISRANGE(minimum, maximum);
    return this.makeMessages(message);
  }

  isLength(minimum, maximum) {
    const message =
      this.#arrayValue.length >= minimum && this.#arrayValue.length <= maximum
        ? true
        : ISLENGTH(`${minimum} ~ ${maximum}`);
    return this.makeMessages(message);
  }

  isStartWith(checkStartWith) {
    const message = this.#arrayValue.filter((number) => number.startsWith(checkStartWith)).length
      ? ISSTARTWITH(checkStartWith)
      : true;
    return this.makeMessages(message);
  }
}

module.exports = { StringValidator, ArrayValidator };
