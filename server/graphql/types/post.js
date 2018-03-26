import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLList
} from 'graphql';
import { UserType } from './user';
import { CommentType } from './comment';

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
			resolve(root, args, { Models }) {
				return Models.User.findById(root.uid).exec();
			}
		},
		comments: {
			type: new GraphQLList(CommentType),
			resolve(root, args, { Models }) {
				return Models.Comment.find({postId: root._id}).exec();
			}
		}
	})
})


