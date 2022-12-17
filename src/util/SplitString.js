const SplitString = {
  splitCoachName(nameString) {
    return nameString.split(",");
  },

  splitMenu(menuString) {
    if (menuString === "") return [];
    return menuString.split(",");
  },
};

module.exports = SplitString;
