const { tracks } = require('./tracks_data.json');

class TracksAPI {
  getAllTracks() {
    return tracks;
  }

  getTrack(id) {
    return tracks.find(l => l.id === id);
  }
}

module.exports = TracksAPI;
