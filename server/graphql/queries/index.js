import {
	GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import { UserType } from "../types/user";
import { PostType } from '../types/post';
import graphqlFields from 'graphql-fields';

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
      resolve(root, args, { Models }, info) {
        let parseInfo = (Object.keys(graphqlFields(info))).join(' ');
        
        return Models.User.findById(args.id).select(parseInfo).exec();
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(root, args, { Models }) {
        return Models.User.find().exec();
      }
    },

    post: {
      type: PostType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(root, args, { Models }) {
        return Models.Post.findById(args.id).exec();
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(root, args, { Models }) {
        return Models.Post.find().exec();
      }
    },
  })
})