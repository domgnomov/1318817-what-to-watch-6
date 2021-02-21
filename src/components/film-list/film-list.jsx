import React, {useState} from 'react';
import Card from "../card/card";
import {connect} from "react-redux";
import {FilmValidation} from "../validation/validation";
import PropTypes from "prop-types";

const FilmList = (props) => {
  const setActiveId = useState(1)[1];
  const {filteredFilms} = props;
  return (
    <>
      {
        filteredFilms.map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms
});

FilmList.propTypes = {
  filteredFilms: PropTypes.arrayOf(FilmValidation).isRequired
};

export {FilmList};
export default connect(mapStateToProps, null)(FilmList);
