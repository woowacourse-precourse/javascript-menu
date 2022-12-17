const { ERROR } = require('../../constants/Constants');
const MyError = require('../MyError');

const NameError = class extends MyError {};

module.exports = NameError;
