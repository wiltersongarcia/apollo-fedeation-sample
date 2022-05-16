const resolvers = {
  Query: {
    tracks: (_, __, { dataSources }) => {
      return dataSources.tracksAPI.getAllTracks();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.tracksAPI.getTrack(id);
    },
  },
  Track: {
    __resolveReference({ id }, { dataSources }) {
      return dataSources.tracksAPI.getTrack(id)
    }
  }
};

module.exports = resolvers;
