import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Card from "../card/card";
import {FilmValidation} from "../validation/validation";
import {LIKE_THIS_LIMIT} from "../../const";

const LikeThisFilms = (props) => {
  const setActiveId = useState(1)[1];
  const {allFilms, genre} = props;
  const likeThisFilms = Array.from(allFilms).filter((film) => film.genre === genre).slice(0, LIKE_THIS_LIMIT);
  return (
    <>
      {
        likeThisFilms.map((film) => (<Card key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
});

LikeThisFilms.propTypes = {
  allFilms: PropTypes.arrayOf(FilmValidation).isRequired,
  genre: PropTypes.string.isRequired
};

export {LikeThisFilms};
export default connect(mapStateToProps, null)(LikeThisFilms);
