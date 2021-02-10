import React, {Fragment, useState} from 'react';
import Card from "../card/card";

const FilmList = (props) => {
  const [activeId, setActiveId] = useState(1);
  const {films} = props;
  return (
    <Fragment>
      {
        films.map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </Fragment>
  );
};

export default FilmList;
