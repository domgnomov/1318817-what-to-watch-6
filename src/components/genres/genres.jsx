import React from 'react';
import {Genre} from "./genre";
import {useSelector} from "react-redux";
import {GENRES_LIMIT} from "../../const/const";

const Genres = () => {
  const {allFilms} = useSelector((state) => state.FILM);

  const genres = new Set();
  genres.add(`All genres`);
  allFilms.map((film) => film.genre).forEach(genres.add, genres);
  const limitedGenres = genres.size <= GENRES_LIMIT ? Array.from(genres.values()) : Array.from(genres.values()).slice(0, GENRES_LIMIT);

  return (
    <>
      <ul className="catalog__genres-list">
        {
          limitedGenres.map((genre) => (<Genre key={genre} genre={genre}/>))
        }
      </ul>
    </>
  );
};

export {Genres};
