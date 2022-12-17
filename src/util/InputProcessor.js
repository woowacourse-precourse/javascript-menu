const InputProcessor = {
  parseCommaStringsToArray(input) {
    return input.split(',').map((element) => element.trim());
  },
};

module.exports = InputProcessor;
