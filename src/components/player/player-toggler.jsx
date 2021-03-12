import React from 'react';

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


export default PlayerToggler;
