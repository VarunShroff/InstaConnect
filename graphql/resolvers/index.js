const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
  Post: {
    likeCount(parent) { //parent is an object that returns the post the has been sent
      return parent.likes.length;
    },
    commentCount: (parent) => parent.comments.length // simpler syntax that returns comment count
  },
  Query: {
    ...postsResolvers.Query // spread operator used for quick access
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation
  }
};
