import mongoose from 'mongoose';
const Schema = mongoose.Schema

const postSchema = new Schema({
	uid: {type: String, required : true},
	title: {type: String, required : true},
	body: {type: String, required : true}
});

const Post = mongoose.model('Post', postSchema);

const addPost = (post, callback) => {
	Post.create(post, callback);
}

const getPost = (id, callback) => {
	Post.findById(id, callback);
}

const getPosts = (options = {}, callback) => {
	Post.find(options).exec(callback);
}


export { 
	addPost,
	getPost,
	getPosts
}