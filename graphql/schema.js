import { GraphQLSchema } from 'graphql';
import { RootQuery } from './queries';
import { mutation } from './mutations';

export default new GraphQLSchema({
	query: RootQuery,
	mutation: mutation
});