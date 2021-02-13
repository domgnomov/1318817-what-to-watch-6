import React, {useState} from 'react';

const AddReviewForm = () => {
  const ratingStarsLength = 10;
  const [comment, setComment] = useState(``);
  const setRating = useState(ratingStarsLength)[1];

  const ratingStars = new Array(ratingStarsLength).fill(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
                <>
                  <input className="rating__input" id={`star-` + (id + 1)} type="radio" name="rating" defaultValue={(id + 1)} onChange={() => setRating((id + 1))}/>
                  <label className="rating__label" htmlFor={`star-` + (id + 1)}>Rating {(id + 1)}</label>
                </>
              ))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={comment} onChange={handleCommentChange}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </>);
};

export default AddReviewForm;
