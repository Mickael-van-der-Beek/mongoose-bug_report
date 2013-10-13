var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model.bind(mongoose);

var dburi = 'localhost/bug_report';
mongoose.connect('mongodb://' + dburi, function (error) {
	if(error) {
		throw error;
	}
	else {
		boot_Env();
	}
});

function boot_Env () {
	var UserSchema = new Schema({
		name		: { type: String, default: '' },
		username	: { type: String, default: '' },
	});

	var UserModel = model('User', UserSchema);

	new UserModel({
		name		: 'John Doe',
		username	: 'JD'
	}).save(function (error, user) {
		if(error) {
			throw error;
		}
		else {
			console.log('\x1B[32mSTATUS: Saved the new user.\u001b[0m');
			reproduce_Bug();
		}
	});
}

function reproduce_Bug () {
	model('User').find({
		name		: 'John Doe'
	}, null, {
		explain		: true
	}, function (error, users) {
		if(error) {
			throw error;
		}
		else {
			console.log('\u001b[31mBUG: The resulting "explain" object is merged with the user schema.\u001b[0m');
			console.log(users);
		}
	});
}
