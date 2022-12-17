const ErrorChecker = {
  checkValid(input, predicate, errorMessage) {
    if (!predicate(input)) {
      throw new Error(errorMessage);
    }
  },
};

module.exports = ErrorChecker;
