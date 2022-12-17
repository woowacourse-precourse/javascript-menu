const { SAMPLE } = require("../Constant/Constant");

const GetSamples = {
  get() {
    let toArrSamples = {};
    for (category in SAMPLE) {
      toArrSamples[category] = SAMPLE[category].split(", ");
    }
    return toArrSamples;
  },
};

module.exports = GetSamples;
