
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Rating = ({ rating, onRatingChange }) => (
  <div className="rating flex items-center">
    {[...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 cursor-pointer size-10 ${rating >= index + 1 ? 'text-orange-500' : 'text-gray-300'}`}
        onClick={() => onRatingChange(index + 1)}
      />
    ))}
  </div>
);

export default Rating;
