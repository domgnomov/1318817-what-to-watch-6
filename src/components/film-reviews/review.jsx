import React from 'react';

const Review = ({review}) => {

  return (
    <>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{review.userName}</cite>
            <time className="review__date" dateTime="2015-11-18">{review.date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>
    </>
  );
};


export default Review;
