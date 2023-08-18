import React from 'react';

const Rating = ({ rating }) => {
  return (
    <span
      style={{
        color: rating >= 1 ? 'gold' : 'gray',
      }}
    >
      ★
    </span>
  );
};

const RatingBar = ({ rating }) => {
  const ratingNumbers = Array.from(
    { length: Math.floor(rating) },
    (_, index) => index + 1
  );
  if (rating % 1 !== 0) {
    ratingNumbers.push(0.5);
  }

  return (
    <div>
      <div>
        
        {ratingNumbers.map((star) => (
          <Rating key={star} rating={star} />
        ))}
      </div>
    </div>
  );
};

export default  RatingBar;
