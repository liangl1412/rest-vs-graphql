import mongoose from 'mongoose';
const Schema = mongoose.Schema

const postSchema = new Schema({
	uid: String,
	title: String,
	body: String
});

export default mongoose.model('Post', postSchema);
