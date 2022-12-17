const Exception = {
  checkInputCoachNameListLength(nameList) {
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

  checkInputInedibleMenuLength(menuList) {
    if (nameList.length > 2) {
      return false;
    }
    return true;
  },

  checkInputInedibleValidMenu(menu, validMenuObj) {
    for (let i of validMenuObj) {
      const validMenuList = i.split(",");
      if (validMenuList.includes(menu) === false) {
        return false;
      }
    }

    return true;
  },
};

module.exports = Exception;
