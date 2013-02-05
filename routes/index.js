var models = require('../models');
var User = models.User;
var Twit = models.Twit;

exports.index = function(req, res){
	//list recent tweets
  var twits = Twit.find({}).populate('creator').exec(function(err, twits) {
  	//res.render('index', { title: 'Crappy Twitter' , twits: twits});

	if (req.session.user == undefined) {
		res.render('index2', { title: 'Crappy Twitter' , twits: twits});
	}
	else {
		res.render('index', { title: 'Crappy Twitter' , twits: twits})
	};
  });
};