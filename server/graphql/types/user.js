import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString
} from 'graphql';


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
	})
})

