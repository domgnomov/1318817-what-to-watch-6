import React from 'react';
import PropTypes from "prop-types";

const TimeLapse = ({timeLapse}) => {
  return (
    <>
      <div className="player__time-value">{timeLapse}</div>
    </>
  );
};

TimeLapse.propTypes = {
  timeLapse: PropTypes.string.isRequired
};

export default TimeLapse;
