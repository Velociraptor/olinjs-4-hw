var mongoose = require('mongoose');

//mongoose.connect(process.env.MONGOLAB_URI||'mongodb://localhost/twitterers');
mongoose.connect('mongodb://localhost/twitterers');

var userSchema = mongoose.Schema({
    username: String
});

var twitSchema = mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: String,
    timestamp: Date
});

var User = mongoose.model('User', userSchema);
var Twit = mongoose.model('Twit', twitSchema);

exports.User = User;
exports.Twit = Twit;