import mongoose from 'mongoose';
const Schema = mongoose.Schema

const postSchema = new Schema({
	uid: {type: String, required : true},
	title: {type: String, required : true},
	body: {type: String, required : true}
});

const Post = mongoose.model('Post', postSchema);
export default Post;