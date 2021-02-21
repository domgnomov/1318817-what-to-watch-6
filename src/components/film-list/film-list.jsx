import React, {useState} from 'react';
import Card from "../card/card";
import {connect} from "react-redux";
import {FilmValidation} from "../validation/validation";
import PropTypes from "prop-types";

const FilmList = (props) => {
  const setActiveId = useState(1)[1];
  const {filteredFilms, activeGenre} = props;
  return (
    <>
      {
        filteredFilms.filter((film) => activeGenre === `All genres` || film.genre === activeGenre).map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  filteredFilms: state.filteredFilms
});

FilmList.propTypes = {
  filteredFilms: PropTypes.arrayOf(FilmValidation).isRequired,
  activeGenre: PropTypes.string.isRequired
};

export {FilmList};
export default connect(mapStateToProps, null)(FilmList);
