import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {FilmValidation} from "../validation/validation";
import {ActionCreator} from "../../store/action";
import {SHOW_MORE_COUNTER} from "../../const";

const isShowMoreAvailable = (filteredFilms, allFilms, showCount) => {
  return showCount < allFilms.length;
};

const ShowMore = (props) => {
  const {filteredFilms, activeGenre, allFilms, showCount, onShowMore} = props;
  return (
    <>
      {
        isShowMoreAvailable(filteredFilms, allFilms, showCount) && <button className="catalog__button" type="button" onClick={() => {
          onShowMore(activeGenre, allFilms, showCount);
        }}>Show more</button>
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  allFilms: state.allFilms,
  activeGenre: state.activeGenre,
  showCount: state.showCount
});

const mapDispatchToProps = (dispatch) => ({
  onShowMore(activeGenre, allFilms, showCount) {
    showCount += SHOW_MORE_COUNTER;
    dispatch(ActionCreator.changeShowCount(showCount));
    dispatch(ActionCreator.getFilms(activeGenre, allFilms, showCount));
  },
});

ShowMore.propTypes = {
  allFilms: PropTypes.arrayOf(FilmValidation),
  filteredFilms: PropTypes.arrayOf(FilmValidation),
  activeGenre: PropTypes.string.isRequired,
  showCount: PropTypes.number.isRequired,
  onShowMore: PropTypes.func.isRequired
};

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
