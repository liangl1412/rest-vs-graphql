import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
    GraphQLInt,
	GraphQLID,
	GraphQLList
} from 'graphql';
import { UserType } from './user';
import User from '../../models/user';
import { CommentType } from './comment';
import Comment from '../../models/comment';

export const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		_id: {
			type: GraphQLString
		},
    	uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
    	body: {
      		type: GraphQLString
		},
		user: {
			type: UserType,
			resolve(root) {
				return User.findById(root.uid).exec();
			}
		},
		comments: {
			type: new GraphQLList(CommentType),
			resolve(root) {
				return Comment.find({postId: root._id}).exec();
			}
		}
	})
})


// export const postInputType = new GraphQLInputObjectType({
// 	name: 'PostInput',
// 	fields: () => ({
//     uid: {
// 			type: GraphQLString
// 		},
// 		title: {
// 			type: GraphQLString
// 		},
// 		body: {
// 			type: GraphQLString
// 		},
// 	})
// })
