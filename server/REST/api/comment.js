import Comment from '../../models/comment';

const addComment = (comment, callback) => {
	Comment.create(comment, callback);
}

const getComment = (id, callback) => {
	Comment.findById(id, callback);
}

const getComments = (options = {}, callback) => {
	Comment.find(options).sort('-create_date').exec(callback);
}

export { 
	addComment,
	getComment,
	getComments
}