import Post from '../../models/post';

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