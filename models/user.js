import mongoose from 'mongoose';

const Schema = mongoose.Schema

const userSchema = new Schema({
	email: {type: String, unique : true, required : true},
	name: {type: String, required : true}
});

const User = mongoose.model('User', userSchema);

const addUser = (user, callback) => {
	User.create(user, callback);
}

const getUsers = (options = {}, callback) => {
	User.find(options).exec(callback);
}

const getUser = (id, callback) => {
	User.findById(id, callback);
}
export { 
	addUser,
	getUser,
	getUsers
}