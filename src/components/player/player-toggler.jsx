import React from 'react';
import PropTypes from "prop-types";

const PlayerToggler = ({togglerProgress}) => {
  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={0} max={100} />
        <div className="player__toggler" style={{left: togglerProgress + `%`}}>Toggler</div>
      </div>
    </>
  );
};

PlayerToggler.propTypes = {
  togglerProgress: PropTypes.number.isRequired
};

export default PlayerToggler;
