import React from 'react';
import {useSelector} from "react-redux";

const TimeLapse = () => {
  const {playingTime} = useSelector((state) => state.FILM);

  return (
    <>
      <div className="player__time-value">{playingTime}</div>
    </>
  );
};


export default TimeLapse;
