const Exception = {

  checkInputCoachNameListLength(nameList){
    if (nameList.length < 2 || nameList.length > 5) {
      return false;
    }
    return true;
  },

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
