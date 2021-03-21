import React from 'react';
import {ReviewValidation} from "../../validation/validation";

const Review = ({review}) => {
  return (
    <>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{review.userName}</cite>
            <time className="review__date" dateTime={review.date}>{review.textDate}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>
    </>
  );
};

Review.propTypes = ReviewValidation;

export default Review;
