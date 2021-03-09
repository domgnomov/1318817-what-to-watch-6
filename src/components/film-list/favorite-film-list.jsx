import React, {useState} from 'react';
import Card from "../card/card";
import {useSelector} from "react-redux";


const FavoriteFilmList = () => {
  const setActiveId = useState(1)[1];
  debugger;
  const {favoriteFilms} = useSelector((state) => state.FILM);

  return (
    <>
      {
        favoriteFilms.map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};

export {FavoriteFilmList};
