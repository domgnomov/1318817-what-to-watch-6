import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {film} = props;
  return (
    <Main film={film} />
  );
};

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number.isRequired
  })
};

export default App;
