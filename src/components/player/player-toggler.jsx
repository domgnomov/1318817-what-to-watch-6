import React from 'react';
import {useSelector} from "react-redux";

const PlayerToggler = () => {
  const {playingProgress} = useSelector((state) => state.FILM);
  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={0} max={100} />
        <div className="player__toggler" style={{left: playingProgress + `%`}}>Toggler</div>
      </div>
    </>
  );
};


export default PlayerToggler;
