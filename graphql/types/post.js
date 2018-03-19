import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';
import { UserType } from './user';
import User from '../../models/user';

export const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
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
			resolve(root){
				return User.findById(root.uid);
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
