import React, {Fragment, useState} from 'react';
import Card from "../card/card";
import {FilmsValidation} from "../validation/validation";

const FilmList = (props) => {
  const setActiveId = useState(1)[1];
  const {films, genre} = props;
  return (
    <Fragment>
      {
        films.filter((film) => !genre || film.genre === genre).map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </Fragment>
  );
};

FilmList.propTypes = FilmsValidation;

export default FilmList;
