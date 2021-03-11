import React, {useState, Fragment, useRef} from 'react';
import {sendComment} from "../../store/api-actions";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {RATING_STARS_LENGTH} from "../../const";

const AddReviewForm = (props) => {
  const {filmId} = props;
  const [currentRating, setRating] = useState(RATING_STARS_LENGTH);
  const dispatch = useDispatch();

  const commentRef = useRef();

  const ratingStars = new Array(RATING_STARS_LENGTH).fill(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendComment(filmId, {
      rating: currentRating,
      comment: commentRef.current.value
    }));
  };

  return (
    <>
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              ratingStars.map((value, id) => {
                const starId = id + 1;
                return (
                  <Fragment key={starId}>
                    <input className="rating__input" id={`star-` + starId} type="radio" name="rating" defaultValue={starId} onChange={() => setRating(starId)}/>
                    <label className="rating__label" htmlFor={`star-` + starId}>Rating {starId}</label>
                  </Fragment>
                );
              })
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea ref={commentRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </>);
};

AddReviewForm.propTypes = {
  filmId: PropTypes.string.isRequired
};

export {AddReviewForm};
