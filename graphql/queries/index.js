import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql';
import { UserType } from "../types/user";
import User from '../../models/user';
import { PostType } from '../types/post';
import Post from '../../models/post';

export const RootQuery= new GraphQLObjectType({
  name:'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(root, args) {
        return User.findById(args.id).exec();
      }
    },

    post: {
      type: PostType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(root, args) {
        return Post.findById(args.id).exec();
      }
    }
  }
})