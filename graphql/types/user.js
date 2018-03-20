import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString
} from 'graphql';

// import PostModel from '../../models/post';
// import { postType } from './post';

export const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		_id: {
			type: GraphQLString
		},
		email: {
			type: GraphQLString
		},
		name: {
		type: GraphQLString
		}
    // posts: {
		// 	type: new GraphQLList(postType),
		// 	resolve(user) {
		// 		const { _id } = user
		// 		return PostModel.find({ uid: _id }).exec()
		// 	}
		// },
	})
})


// export const userInputType = new GraphQLInputObjectType({
// 	name: 'UserInput',
// 	fields: () => ({
// 		email: {
// 			type: GraphQLString
// 		},
// 		name: {
// 			type: GraphQLString
// 		}
// 	})
// })
