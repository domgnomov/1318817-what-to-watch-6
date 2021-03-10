import React from 'react';
import Review from "./review";
import {ReviewsValidation} from "../validation/validation";


const ReviewsColumn = ({reviews}) => {
  return (
    <>
      <div className="movie-card__reviews-col">
        {
          reviews.map((review) => (<Review key={review.id} review={review}/>))
        }
      </div>
    </>
  );
};

ReviewsColumn.propTypes = ReviewsValidation;

export {ReviewsColumn};
