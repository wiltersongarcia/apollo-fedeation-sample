const resolvers = {
  Query: {
    latestReviews: (_, __, {dataSources}) => {
      return dataSources.reviewsAPI.getLatestReviews();
    }
  },
  Mutation: {
    submitReview: (_, { review }, { dataSources }) => {
      const newReview = dataSources.reviewsAPI.submitReviewForTrack(review);
      return { review: newReview }
    }
  },
  Track: {
    overallRating: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getOverallRatingForTrack(id)
    },
    reviews: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getReviewsForTrack(id)
    },
  },
  Review: {
    track({trackId}) {
      return {
        id: trackId
      }
    }
  }
};

module.exports = resolvers;
