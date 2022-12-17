class ErrorHandler {
  static crewNames(validTarget, errorCallback) {
    try {
      validTarget();
    } catch (error) {
      console.log(error.message);
      errorCallback();
    }
  }
}

module.exports = ErrorHandler;
