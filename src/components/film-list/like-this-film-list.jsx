import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Card from "../card/card";
import {LIKE_THIS_LIMIT} from "../../const/const";
import {getFilmsByGenreAndLimit} from "../../services/data";

const LikeThisFilms = () => {
  const setActiveId = useState(1)[1];
  const {allFilms, currentFilm} = useSelector((state) => state.FILM);

  const likeThisFilms = getFilmsByGenreAndLimit(currentFilm.genre, allFilms, LIKE_THIS_LIMIT);

  return (
    <>
      {
        likeThisFilms.map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};

export {LikeThisFilms};
