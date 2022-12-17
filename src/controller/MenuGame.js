const GameCtrl = require('./GameCtrl');
const { SizeValidator, ReplayValidator, CommandValidator } = require('../validators');
const { CHOICE } = require('../constants');

class MenuCtrl extends GameCtrl {}

module.exports = MenuCtrl;
