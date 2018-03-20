import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import User from '../../models/user';
import { UserType } from '../types/user';

export const mutation = new GraphQLObjectType({
  name:'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(root, args) {
        const user = new User(args).save();
        if(user) {
          console.log(user);
          return user;
        }
      }
    }
  }
})