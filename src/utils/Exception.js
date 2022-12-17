const Exception = {
  checkInputCoachNameLength(nameList) {
    nameList.forEach((name) => {
      if (name.length < 2 || name.length > 4) {
        return false;
      }
      return true;
    });
  },
};

module.exports = Exception;
