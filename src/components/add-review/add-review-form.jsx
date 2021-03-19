import React, {useState, Fragment, useRef} from 'react';
import {sendComment} from "../../store/api-actions";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {RATING_STARS_LENGTH} from "../../const/const";
import {setIsFormDisabled} from "../../store/action";

const AddReviewForm = ({filmId}) => {
  const {isFormDisabled} = useSelector((state) => state.FILM);

  const [currentRating, setRating] = useState(0);
  const [commentLength, setCommentLength] = useState(0);

  const commentRef = useRef();
  const submitRef = useRef();

  const dispatch = useDispatch();

  const ratingStars = new Array(RATING_STARS_LENGTH).fill(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setIsFormDisabled(true));
    dispatch(sendComment(filmId, {
      rating: currentRating,
      comment: commentRef.current.value
    }));
  };

  const handleTextChange = (evt) => {
    evt.preventDefault();
    setCommentLength(commentRef.current.value.length);
  };

  const isValidComment = () => {
    return commentLength >= 50 && commentLength <= 400;
  };

  const isValidRating = () => {
    return currentRating > 0;
  };

  const isSubmitNotAvailable = () => {
    return !isValidComment() || !isValidRating();
  };

  const getInformMessage = () => {
    if (!isValidRating()) {
      return `Поставьте фильму оценку`;
    } else if (!isValidComment()) {
      return `Текст отзыва должен быть не меньше 50 и не больше 400 символов`;
    } else {
      return ``;
    }
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
                    <input disabled={isFormDisabled} className="rating__input" id={`star-` + starId} type="radio" name="rating" defaultValue={starId} onChange={() => setRating(starId)}/>
                    <label className="rating__label" htmlFor={`star-` + starId}>Rating {starId}</label>
                  </Fragment>
                );
              })
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea disabled={isFormDisabled} ref={commentRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleTextChange}/>
          <div className="add-review__submit">
            <button ref={submitRef} className="add-review__btn" disabled={isSubmitNotAvailable() || isFormDisabled} type="submit">Post</button>
          </div>
        </div>
        <label>{getInformMessage()}</label>
      </form>
    </>);
};

AddReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired
};

export {AddReviewForm};
