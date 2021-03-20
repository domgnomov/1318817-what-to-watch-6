import React, {useState, Fragment, useRef} from 'react';
import {fetchFilm, sendComment} from "../../store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {DEFAULT_FILM, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RATING_STARS_LENGTH} from "../../const/const";
import {setIsFormDisabled} from "../../store/action";
import {useParams} from "react-router-dom";

const AddReviewForm = () => {
  const {currentFilm} = useSelector((state) => state.FILM);
  const {isFormDisabled} = useSelector((state) => state.REVIEW);
  const [currentRating, setRating] = useState(0);
  const [commentLength, setCommentLength] = useState(0);

  const dispatch = useDispatch();

  const {id} = useParams();

  const commentRef = useRef();
  const submitRef = useRef();

  const ratingStars = new Array(RATING_STARS_LENGTH).fill(false);

  if (currentFilm === DEFAULT_FILM) {
    dispatch(fetchFilm(id));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setIsFormDisabled(true));
    dispatch(sendComment(currentFilm.id, {
      rating: currentRating,
      comment: commentRef.current.value
    }));
  };

  const handleTextChange = (evt) => {
    evt.preventDefault();
    setCommentLength(commentRef.current.value.length);
  };

  const isValidComment = () => {
    return commentLength >= MIN_COMMENT_LENGTH && commentLength <= MAX_COMMENT_LENGTH;
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
              ratingStars.map((value, ratingStarId) => {
                const starId = ratingStarId + 1;
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

export {AddReviewForm};
