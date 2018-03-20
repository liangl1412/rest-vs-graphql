import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';
import { RootQuery } from './queries';
import { mutation } from './mutations';
// import mutations from './mutations';
// import queries from './queries';

// export default new GraphQLSchema({
// 	query: new GraphQLObjectType({
// 		name: 'Query',
// 		fields: queries
// 	}),
// 	mutation: new GraphQLObjectType({
// 		name: 'Mutation',
// 		fields: mutations
// 	})
// });
export default new GraphQLSchema({
	query: RootQuery,
	mutation: mutation
});