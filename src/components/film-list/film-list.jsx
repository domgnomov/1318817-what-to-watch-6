import React, {useState} from 'react';
import Card from "../card/card";
import {useSelector} from "react-redux";


const FilmList = () => {
  const setActiveId = useState(1)[1];
  const {filteredFilms} = useSelector((state) => state.FILM);

  return (
    <>
      {
        filteredFilms.map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};

export {FilmList};
