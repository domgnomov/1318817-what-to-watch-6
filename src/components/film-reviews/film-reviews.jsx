import React from 'react';
import {useSelector} from "react-redux";
import {ReviewsColumn} from "./reviews-column";


const FilmReviews = () => {
  const {reviews} = useSelector((state) => state.REVIEW);

  let firstColumnReviews = [];
  let secondColumnReviews = [];

  if (reviews && reviews.length > 0) {
    const half = Math.ceil(reviews.length / 2);
    firstColumnReviews = Array.from(reviews).splice(0, half);
    secondColumnReviews = Array.from(reviews).splice(half, reviews.length);
  }

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <ReviewsColumn reviews={firstColumnReviews}/>
        <ReviewsColumn reviews={secondColumnReviews}/>
      </div>
    </>
  );
};

export default FilmReviews;
