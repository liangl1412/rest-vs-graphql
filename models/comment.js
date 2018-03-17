import mongoose from 'mongoose';
const Schema = mongoose.Schema

const commentSchema = new Schema({
    uid: String,
    postId: String,
    body: String
});

export default mongoose.model('Comment', commentSchema);
