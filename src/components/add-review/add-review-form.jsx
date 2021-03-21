import React, {useState, Fragment, useRef} from 'react';
import {sendComment} from "../../store/api-actions";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

const AddReviewForm = (props) => {
  const {filmId} = props;
  const ratingStarsLength = 10;
  const [comment, setComment] = useState(``);
  const setRating = useState(ratingStarsLength)[1];
  const dispatch = useDispatch();

  const rattingRef = useRef();
  const commentRef = useRef();

  const ratingStars = new Array(ratingStarsLength).fill(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendComment(filmId, {
      rating: rattingRef.current.value,
      comment: commentRef.current.value
    }));
  };

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setComment(value);
  };

  return (
    <>
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              ratingStars.map((value, id) => (
                <Fragment key={id}>
                  <input ref={rattingRef} className="rating__input" id={`star-` + (id + 1)} type="radio" name="rating" defaultValue={(id + 1)} onChange={() => setRating((id + 1))}/>
                  <label className="rating__label" htmlFor={`star-` + (id + 1)}>Rating {(id + 1)}</label>
                </Fragment>
              ))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea ref={commentRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={comment} onChange={handleCommentChange}/>
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
