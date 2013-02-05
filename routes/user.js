var models = require('../models');
var User = models.User;
var Twit = models.Twit;

exports.list = function(req, res){
  var allTwits = Twit.find({}).populate('creator').sort({'timestamp':-1}).exec(function(err, allTwits) {
		//console.log(allTwits);
		res.render('_twits', {twits: allTwits});
	});
};

exports.login = function(req, res){
  res.render("login", {'title':"Log In Please"});
};

exports.postLogin = function(req, res){
  var params = req.body;
  existingUser = User.find({'username':params['username']}).exec(function(err, existingUser) {
  	if (existingUser.length == 0) {
		var newUser = new User({'username':params['username']});
	    newUser.save(function (err) {
	      if (err) {
	        return console.log("error we couldn't create your user");
	      };
	      req.session.user = newUser;
	      res.redirect("/");
	    });
	}
    else {
    	req.session.user = existingUser[0];
    	res.redirect("/");
    }
  });
};

exports.tweet = function(req, res) {
	var newMessage = req.body['message'];
	//console.log(newMessage.length);
	if (newMessage.length < 141) {
		var newCreator = req.session.user;
		var stamp = new Date();

		//stamp.getTime();
		var newTwit = new Twit({'creator':newCreator._id, 'message':newMessage, 'timestamp':stamp});
		//console.log(newTwit);
		newTwit.save(function (err) {
		      if (err) {
		        return console.log("error we couldn't save your Twit", err);
		      };
		});
	} else {
		//res.send('Your Twit is waaaaay too long!');
		console.log('Your Twit is waaaaay too long!');
		//res.redirect('toolong', {title: 'Your Twit is waaaaay too long!'});
		// var alertMsg = function(){ alert('Your Twit is waaaaay too long!'); };
		// alertMsg;
		// console.log(alertMsg);
		//$.alert('Your Twit is waaaaay too long!');
	};
};

// exports.tweetLong = function(req, res) {
// 	res.send('Your Twit is waaaaay too long!');
// };