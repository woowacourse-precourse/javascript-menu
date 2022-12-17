const ErrorChecker = {
  checkValid(input, predicate, errorMessage) {
    if (!predicate(input)) {
      throw new Error(errorMessage);
    }
  },

  checkEveryVaild(array, predicate, errorMessage) {
    if (!array.every(predicate)) {
      throw new Error(errorMessage);
    }
  },
};

module.exports = ErrorChecker;
