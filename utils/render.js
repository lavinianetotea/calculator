exports.calculator = function (req, res){
	var page = {
		angular: false,
		topMenu: true,
		template: 'calculator.html'
	};

	res.render('template', {page: page});
};

exports.login = function (req, res){

	res.render('template', {
		page: {
			template: "login.html"
		},
		message: req.flash('info')
	});
};

exports.register = function (req, res){

	res.render('template', {
		page: {
			template: "register.html"
		},
		message: req.flash('info')
	});
};