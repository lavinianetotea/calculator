module.exports = function(app, passport, oauth2) {

	var utils  = require("../utils");
	var render = utils.render;

	// Calculator page
	app.get('/', render.register);
    app.get('/calculator', utils.login.ensureLoggedIn(), render.calculator);

	// ****************************************** //
	// ************* AUTHENTICATION ************* //
	// ****************************************** //

	// Login page
	app.get('/login', render.login);

	// Process the authentication
	app.post('/login', passport.authenticate('main', {
		successReturnToOrRedirect : '/calculator',
		failureRedirect : '/login'
	}));

	// Logout
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/isLogged', function(req, res){
		res.json({isLogged: req.user?true:false})
	});



	// ****************************************** //
	// *************** OAUTH 2.0  *************** //
	// ****************************************** //

	app.get ('/oauth2',          oauth2.authorization);
	app.post('/oauth2/decision', oauth2.decision);
	app.post('/oauth2/token',    oauth2.token);



	// ****************************************** //
	// ************** REGISTRATION ************** //
	// ****************************************** //

	// Register page
	app.get('/register', render.register);

	// Process the registration
	app.post('/register', passport.authenticate('main-register', {
		successRedirect : '/',
		failureRedirect : '/register'
	}));
};