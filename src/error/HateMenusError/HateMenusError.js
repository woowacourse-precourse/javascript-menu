const { ERROR } = require('../../constants/Constants');
const MyError = require('../MyError');

const HateMenusError = class extends MyError {};

module.exports = HateMenusError;
