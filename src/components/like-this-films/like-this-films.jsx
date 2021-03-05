import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Card from "../card/card";
import {LIKE_THIS_LIMIT} from "../../const";

const LikeThisFilms = () => {
  const setActiveId = useState(1)[1];
  const {allFilms, genre} = useSelector((state) => state.MAIN);
  const likeThisFilms = Array.from(allFilms).filter((film) => film.genre === genre).slice(0, LIKE_THIS_LIMIT);
  return (
    <>
      {
        likeThisFilms.map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};

export {LikeThisFilms};
