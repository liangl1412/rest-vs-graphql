import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { UserType } from '../types/user';
import { PostType } from '../types/post';
import { CommentType } from '../types/comment';

export const mutation = new GraphQLObjectType({
  name:'Mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(root, args, { Models }) {
        return new Models.User(args).save();
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: { type: GraphQLString},
        email: { type: GraphQLString}
      },
      resolve(root, args, { Models, dataloaders }) {
        return Models.User.findByIdAndUpdate(
          args.id,
          { $set: args },
          { new: true }
        )
        .then(dataloaders.userLoader.clear(args.id))
      }
    },
    addPost: {
      type: PostType,
      args: {
        uid: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        body: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(root, args, { Models }) {
        return new Models.Post(args).save();
      }
    },
    addComment: {
      type: CommentType,
      args: {
        uid: { type: new GraphQLNonNull(GraphQLString) },
        postId: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(root, args, { Models }) {
        return new Models.Comment(args).save();
      }
    }
  })
})