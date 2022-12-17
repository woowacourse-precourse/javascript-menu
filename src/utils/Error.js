const View = require('../views/View');

const Error = {
  throwError(error) {
    View.ErrorMsg(error);
  },
};

module.exports = Error;
