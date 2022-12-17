function menuValid(menuList, menu) {
  if (!CheckMenuSize(menuList, menu)) {
    return false;
  }

  return true;
}

function CheckMenuSize(menuList, menu) {
  if (menu === '') {
    return true;
  }
  if (!menu.includes(',')) {
    return checkOneMenu(menuList, menu);
  }
  if (menu.includes(',')) {
    if (menu.split(',').length > 2) {
      return false;
    }
    if (
      checkSameMenu(menu.split(',')) !== menu.split(',').length ||
      !checkTwoMenu(menuList, menu.split(','))
    ) {
      return false;
    }
  }

  return true;
}

function checkOneMenu(menuList, menu) {
  const joinMenuList = `${menuList.일식},${menuList.한식},${menuList.중식},${menuList.아시안},${menuList.양식}`;

  const filterMenu = joinMenuList.replace(/ /g, '').split(',').includes(menu);
  if (!filterMenu) {
    return false;
  }

  return true;
}

function checkTwoMenu(menuList, splitmenu) {
  const joinMenuList = `${menuList.일식},${menuList.한식},${menuList.중식},${menuList.아시안},${menuList.양식}`;

  const filterMenu = splitmenu.filter(menu =>
    joinMenuList.replace(/ /g, '').split(',').includes(menu)
  );

  if (filterMenu.length !== 2) {
    return false;
  }

  return true;
}

function checkSameMenu(splitmenu) {
  return new Set(...splitmenu).size;
}

module.exports = menuValid;
