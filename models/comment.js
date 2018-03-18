import mongoose from 'mongoose';
const Schema = mongoose.Schema

const commentSchema = new Schema({
    uid: {type: String, required : true},
    postId: {type: String, required : true},
    body: {type: String, required : true},
    create_date:{
		type: Date,
		default: Date.now
	}
});

const Comment = mongoose.model('Comment', commentSchema);

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