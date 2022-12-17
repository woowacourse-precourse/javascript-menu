class Validator {
  static hasDuplicateComma(str) {
    const DUPLICATE_COMMA_REGEXP = /[,]{2,}/;
    return DUPLICATE_COMMA_REGEXP.test(str);
  }

  static hasCommaInFront(str) {
    const COMMA_IN_FRONT_REGEXP = /^[,]/;
    return COMMA_IN_FRONT_REGEXP.test(str);
  }

  static hasCommaInBack(str) {
    const COMMA_IN_BACK_REGEXP = /[,]$/;
    return COMMA_IN_BACK_REGEXP.test(str);
  }

  static hasDuplicateElements(arr) {
    const setToCompare = new Set(arr);
    return arr.length !== setToCompare.size;
  }
}

module.exports = Validator;
