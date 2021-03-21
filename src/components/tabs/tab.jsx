import React from 'react';
import {FilmValidation} from "../../validation/validation";


const Tab = (props) => {
  const {name, id, activeTabId, setActiveTabId} = props;

  return (
    <>
      <li className={`movie-nav__item ${activeTabId === id && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          setActiveTabId(id);
        }}>{name}</a>
      </li>
    </>
  );
};

Tab.propTypes = FilmValidation;

export default Tab;
