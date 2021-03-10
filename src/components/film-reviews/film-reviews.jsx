import React from 'react';
import {FilmValidation} from "../validation/validation";
import {useSelector} from "react-redux";
import {ReviewsColumn} from "./reviews-column";


const FilmReviews = () => {
  const {reviews} = useSelector((state) => state.FILM);
  let firstColumnReviews = [];
  let secondColumnReviews = [];
  debugger;
  if (reviews && reviews.length > 0) {
    const half = Math.ceil(reviews.length / 2);
    firstColumnReviews = Array.from(reviews).splice(0, half);
    secondColumnReviews = Array.from(reviews).splice(-half);
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

FilmReviews.propTypes = FilmValidation;

export default FilmReviews;
