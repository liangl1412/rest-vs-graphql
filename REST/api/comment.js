import Comment from '../../models/comment';

const addComment = (comment, callback) => {
	Comment.create(comment, callback);
}

const getComments = (options = {}, callback) => {
	Comment.find(options).sort('-create_date').exec(callback);
}

export { 
	addComment,
	getComments
}