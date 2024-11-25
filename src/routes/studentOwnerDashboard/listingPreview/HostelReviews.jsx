// HostelReviews.js
import React, { useState } from 'react';
import Rating from './ratingFeature';
import ReadOnlyRating from './readonlyrating';

const HostelReviews = () => {
  const [userReview, setUserReview] = useState({ rating: 0, comment: '' });
  const [reviews, setReviews] = useState([
    { id: 1, rating: 4, comment: "nice location and friendly workers!" },
    { id: 2, rating: 3, comment: "smart rooms but a bit noisy at night sometimes during the day." },
  ]);

  let totalRating = 0;
  for (const review of reviews) {
    totalRating += review.rating;
  }
  const averageRating = totalRating / reviews.length;

  const handleRatingChange = (newRating) => {
    setUserReview({ ...userReview, rating: newRating });
  };

  const handleCommentChange = (event) => {
    setUserReview({ ...userReview, comment: event.target.value });
  };

  const handleSubmitReview = () => {
    if (userReview.rating > 0 && userReview.comment.trim() !== '') {
      setReviews([...reviews, userReview]);
      setUserReview({ rating: 0, comment: '' });
    }
  };

  const ReviewItem = ({ review }) => (
    <li key={review.id} className="review-item flex items-center border-b py-2">
      <ReadOnlyRating rating={review.rating} />
      <p className="ml-4 text-sm">{review.comment}</p>
    </li>
  );

  return (
    <div className="reviews">
      <h2 className='text-2xl text-black mt-5'>Reviews</h2>
      <p>Average Rating: {averageRating.toFixed(1)} (out of 5)</p>
      <ul className="review-list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <div className="flex flex-col review-form p-4 gap-y-4 h-30vh">
        <Rating
          rating={userReview.rating}
          onRatingChange={(newRating) => handleRatingChange(newRating)}
        />

        <textarea
          value={userReview.comment}
          onChange={handleCommentChange}
          placeholder="Write your review..."
          className="w-full resize-y border focus:border-[#00e0c7] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-nertherblue-500"
          style={{ minHeight: '100px' }}
        />
        <div>
          <button
            onClick={handleSubmitReview}
            className="mt-2 bg-[#07a0c3] focus:bg-[#00e0c7] text-white py-3 px-4 rounded-lg"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelReviews;
