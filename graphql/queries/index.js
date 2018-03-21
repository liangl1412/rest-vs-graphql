import {
	GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import { UserType } from "../types/user";
import User from '../../models/user';
import { PostType } from '../types/post';
import Post from '../../models/post';

export const RootQuery= new GraphQLObjectType({
  name:'RootQueryType',
  fields: () => ({
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
    users: {
      type: new GraphQLList(UserType),
      resolve(root, args) {
        return User.find().exec();
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
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(root, args, {Models}) {
        return Models.Post.find().exec();
      }
    },
  })
})