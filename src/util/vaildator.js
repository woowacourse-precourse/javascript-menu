const Vaildator = {
  isVaildNameLength(name) {
    return name.length >= 2 && name.length <= 4;
  },
};

module.exports = Vaildator;
