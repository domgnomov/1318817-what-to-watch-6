import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFavoriteStatus} from "../../store/api-actions";
import {DEFAULT_FILM} from "../../const/const";

const MyListButton = () => {
  const dispatch = useDispatch();
  const {promoFilm} = useSelector((state) => state.FILM);
  const {currentFilm} = useSelector((state) => state.CURRENT_FILM);
  const film = currentFilm === DEFAULT_FILM ? promoFilm : currentFilm;

  const handleListButtonClick = () => {
    dispatch(changeFavoriteStatus(film.id, !film.isFavorite ? `1` : `0`));
  };

  const getButtonContent = () => {
    if (film.isFavorite) {
      return (
        <>
          <svg viewBox="0 0 18 14" width={18} height={14}>
            <use xlinkHref="#in-list" />
          </svg>
          <span>My list</span>
        </>
      );
    } else {
      return (
        <>
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>
          <span>My list</span>
        </>
      );
    }
  };

  return (
    <>
      <button className="btn btn--list movie-card__button " type="button" onClick={handleListButtonClick}>
        {getButtonContent()}
      </button>
    </>
  );
};

export default MyListButton;
