import React, { useState } from 'react';
import Rating from './ratingFeature'; 
import ReadOnlyRating from './readonlyrating'; 

const CombRatingAndReadOnlyRating = () => {
  const [rating, setRating] = useState(0);
  const [submittedRating, setSubmittedRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitRating = () => {
    console.log("Submitted Rating:", rating);
    setSubmittedRating(rating); 
  };

  return (
    <div>
      <h1>Rate Component Example</h1>
      <Rating rating={rating} onRatingChange={handleRatingChange} />
      <button onClick={handleSubmitRating}>Submit Rating</button>
      <h2>Submitted Rating:</h2>
      <ReadOnlyRating rating={submittedRating} />
    </div>
  );
};

export default CombRatingAndReadOnlyRating;
