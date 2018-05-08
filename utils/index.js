
var utils = require("./utils");
var render = require("./render");

module.exports = {

	login       :   utils.login,

	generateUID :   utils.generateUID,

	query       :   utils.query,

	render: {
		login   :   render.login,
		register:   render.register,
		calculator: render.calculator
	}
}