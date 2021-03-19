import React from 'react';
import {Genre} from "./genre";
import {useSelector} from "react-redux";

const Genres = () => {
  const {allFilms} = useSelector((state) => state.FILM);

  const genres = new Set();
  genres.add(`All genres`);
  allFilms.map((film) => film.genre).forEach(genres.add, genres);
  return (
    <>
      <ul className="catalog__genres-list">
        {
          Array.from(genres.values()).map((genre, id) => (<Genre key={id} genre={genre}/>))
        }
      </ul>
    </>
  );
};

export {Genres};
