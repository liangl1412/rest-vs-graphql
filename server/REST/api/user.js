import User from '../../models/user';

const addUser = (user, callback) => {
	User.create(user, callback);
}

const getUser = (id, callback) => {
	User.findById(id, callback);
}

export { 
	addUser,
	getUser
}