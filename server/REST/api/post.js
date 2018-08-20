import Post from '../../models/post';

const addPost = (post, callback) => {
	Post.create(post, callback);
}

const getPost = (id, callback) => {
	Post.findById(id, callback);
}

export { 
	addPost,
	getPost
}