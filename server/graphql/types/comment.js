import {
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';
import { UserType } from './user';


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
			resolve(root, args, { dataloaders }) {
				return dataloaders.userLoader.load(root.uid);
			}
		}
	})
})