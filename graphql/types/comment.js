import {
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';
import { UserType } from './user';
import User from '../../models/user';


export const CommentType = new GraphQLObjectType({
	name: 'Comment',
	fields: () => ({
		_id: {
			type: GraphQLString
		},
		uid: {
			type: GraphQLString
		},
        postId: {
            type: GraphQLString
        },
        body: {
            type: GraphQLString
        },
        create_date: {
            type: GraphQLString
        },
        user: {
			type: UserType,
			resolve(root){
				return User.findById(root.uid).exec();
			}
		}
	})
})