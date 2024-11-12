
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const ReadOnlyRating = ({ rating }) => (
  <div className="read-only-rating flex items-center">
    {[...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${rating >= index + 1 ? 'text-orange-500' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

export default ReadOnlyRating;
