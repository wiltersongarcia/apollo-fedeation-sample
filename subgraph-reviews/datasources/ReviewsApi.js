let { reviews } = require('./reviews_data.json');

class ReviewsAPI {
  getReview(id) {
    return reviews.find(r => r.id === id);
  }

  getReviewsForTrack(id) {
    return reviews.filter(r => r.trackId === id);
  }

  getLatestReviews() {
    return reviews.slice(Math.max(reviews.length - 3, 0));
  }

  getOverallRatingForTrack(id) {
    const allRatings = reviews
      .filter(r => r.trackId === id)
      .map(r => r.rating);
    const sum = allRatings.reduce((a, b) => a + b, 0);
    const average = sum / allRatings.length || 0;
    return average;
  }

  submitReviewForTrack(review) {
    console.log(review)
    const newReview = {id: `rev-${reviews.length + 1}`, ...review};
    reviews = [...reviews, newReview];
    return newReview;
  }
}

module.exports = ReviewsAPI;
