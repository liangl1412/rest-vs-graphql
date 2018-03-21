import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import User from '../../models/user';
import { UserType, userInputType } from '../types/user';
import { PostType } from '../types/post';
import Post from '../../models/post';

export const mutation = new GraphQLObjectType({
  name:'Mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(root, args) {
        return new User(args).save();
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: { type: GraphQLString},
        email: { type: GraphQLString}
      },
      resolve(root, args) {
        return User.findByIdAndUpdate(
          args.id,
          { $set: args },
          { new: true }
        )
      }
    },
    addPost: {
      type: PostType,
      args: {
        uid: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        body: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(root, args) {
        return new Post(args).save();
      }
    }
  })
})